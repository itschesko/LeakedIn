// popup.js
document.addEventListener("DOMContentLoaded", () => {
  const parseButton = document.getElementById("btn-parse")
  const downloadButton = document.getElementById("btn-dn")
  const formContainer = document.getElementById("form-container")
  const loadingContainer = document.getElementById("loading-container")
  const progressText = document.getElementById("progress-text")
  const messageArea = document.getElementById("message-area")
  const activeReminder = document.getElementById("active-reminder")
  const historyBtn = document.getElementById("btn-history")
  const postfixInput = document.getElementById("search")
  const delimiterInput = document.getElementById("delimiter")
  const fromNumInput = document.getElementById("fromNum")
  const toNumInput = document.getElementById("toNum")
  const messageButtons = document.getElementById("message-buttons")
  const btnHistoryMessage = document.getElementById("btn-history-message")
  const btnGotoLinkedin = document.getElementById("goto-linkedin")
  const emailPreview = document.getElementById("email-preview-value")
  let totalPages = 1
  let totalPeople = 0
  let lastPagesDone = 0

  function setVisibility(el, show) {
    if (!el) return
    if (show) {
      el.classList.add("visible")
      el.classList.remove("hidden")
      el.style.display = ""
    } else {
      el.classList.remove("visible")
      el.classList.add("hidden")
      el.style.display = "none"
    }
  }

  function setParsingUIState(isParsing) {
    setVisibility(formContainer, !isParsing)
    setVisibility(historyBtn.closest(".form-group"), !isParsing)
    setVisibility(loadingContainer, isParsing)
    loadingContainer.style.display = isParsing ? "flex" : "none"
    setVisibility(activeReminder, isParsing)
    setVisibility(messageArea, false)
    messageButtons.style.display = "none"
    ;[postfixInput, delimiterInput, fromNumInput, toNumInput, parseButton, downloadButton, historyBtn].forEach(el => {
      if (el) el.disabled = isParsing
    })
  }

  function updateProgressBar(pagesDone) {
    const percent = Math.round((pagesDone / totalPages) * 100)
    document.getElementById("progress-bar-inner").style.width = percent + "%"
    progressText.textContent = `Pages collected: ${pagesDone} / ${totalPages} (${percent}%)`
    progressText.style.color = "#6b7280"
    progressText.style.fontSize = "13px"
  }

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0]
    const isPeopleSearch = tab && tab.url && tab.url.match(/linkedin\.com\/search\/results\/people\//)
    setVisibility(messageArea, !isPeopleSearch)
    setVisibility(formContainer, isPeopleSearch)
    setVisibility(historyBtn.closest(".form-group"), isPeopleSearch)
    setVisibility(loadingContainer, false)
    setVisibility(activeReminder, false)
    messageButtons.style.display = !isPeopleSearch ? "" : "none"
    if (!isPeopleSearch) {
      messageArea.innerHTML = `
        <div class="modern-warning">
          <div class="modern-warning-title">Please switch to a LinkedIn People Search tab.</div>
        </div>
      `
      document.body.style.height = "450px"
      document.documentElement.style.height = "450px"
      setTimeout(() => {
        if (btnGotoLinkedin) {
          btnGotoLinkedin.onclick = () => {
            window.open("https://www.linkedin.com/search/results/people/", "_blank")
          }
        }
        if (btnHistoryMessage) {
          btnHistoryMessage.onclick = () => {
            chrome.tabs.create({ url: chrome.runtime.getURL("history.html") })
          }
        }
      }, 0)
    } else {
      messageButtons.style.display = "none"
      document.body.style.height = "600px"
      document.documentElement.style.height = "600px"
      chrome.runtime.sendMessage({ action: "getParseState" }, response => {
        if (response && response.inProgress) {
          totalPages = response.totalPages
          lastPagesDone = response.pagesDone
          totalPeople = response.totalPeople
          setParsingUIState(true)
          updateProgressBar(lastPagesDone)
          document.getElementById("people-count").textContent = `People: ${totalPeople}`
        } else {
          setParsingUIState(false)
        }
      })
    }
  })

  if (chrome.storage && chrome.storage.local) {
    chrome.storage.local.get({ postfix: "example.com", delimiter: "" }, result => {
      postfixInput.value = result.postfix
      delimiterInput.value = result.delimiter
      updateEmailPreview()
    })
  } else {
    postfixInput.value = "example.com"
    delimiterInput.value = ""
  }

  postfixInput.addEventListener("input", e => {
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ postfix: e.target.value })
    }
    updateEmailPreview()
  })

  delimiterInput.addEventListener("input", e => {
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ delimiter: e.target.value })
    }
    updateEmailPreview()
  })

  chrome.runtime.onMessage.addListener(message => {
    if (message.action === "broadcastProgress") {
      lastPagesDone = message.pagesDone
      updateProgressBar(lastPagesDone)
    }
    if (message.action === "broadcastCount") {
      totalPeople = message.peopleCount
      document.getElementById("people-count").textContent = `People: ${totalPeople}`
    }
    if (message.action === "saveSearchHistory") {
      restoreFormAfterSave()
    }
  })

  parseButton.addEventListener("click", () => {
    const fromNum = parseInt(fromNumInput.value, 10) || 1
    const toNum = parseInt(toNumInput.value, 10) || 1
    totalPages = Math.max(1, toNum - fromNum + 1)
    const postfix = postfixInput.value.trim()
    const delimiter = delimiterInput.value.trim()
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ postfix: postfix })
      chrome.storage.local.set({ delimiter: delimiter })
    }
    chrome.runtime.sendMessage({
      action: "startParse",
      from: fromNum,
      to: toNum,
      postfix: postfix,
      delimiter: delimiter
    })
    setParsingUIState(true)
    document.getElementById("progress-bar-inner").style.width = "0%"
    progressText.textContent = "LeakedIn is starting..."
  })

  downloadButton.addEventListener("click", () => {})

  historyBtn.addEventListener("click", () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("history.html") })
  })

  function restoreFormAfterSave() {
    setParsingUIState(false)
  }

  function updateEmailPreview() {
    const postfix = postfixInput.value.trim() || "example.com"
    const delimiter = delimiterInput.value || ""
    const email = `j${delimiter}smith@${postfix}`
    emailPreview.textContent = email
  }
})
