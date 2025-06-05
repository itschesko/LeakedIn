// background.js
let isParsing = false
let pagesDone = 0
let totalPeople = 0
let totalPages = 0

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "startParse") {
    isParsing = true
    pagesDone = 0
    totalPeople = 0
    totalPages = Math.max(1, msg.to - msg.from + 1)
    chrome.tabs.query({ active: true, currentWindow: true }).then(tabs => {
      const tab = tabs[0]
      if (!tab || !tab.id) return
      if (tab.url && tab.url.match(/linkedin\.com\/search\/results\/people\//)) {
        chrome.tabs.sendMessage(tab.id, {
          action: "startParse",
          from: msg.from,
          to: msg.to,
          postfix: msg.postfix,
          delimiter: msg.delimiter
        })
      }
    })
  }
  if (msg.action === "updateProgress") {
    pagesDone = msg.pagesDone
    chrome.runtime.sendMessage({
      action: "broadcastProgress",
      pagesDone,
      totalPages
    })
  }
  if (msg.action === "updatePeopleCount") {
    totalPeople = msg.peopleCount
    chrome.runtime.sendMessage({
      action: "broadcastCount",
      peopleCount: totalPeople
    })
  }
  if (msg.action === "saveSearchHistory") {
    chrome.storage.local.get({ searchHistory: [] }, data => {
      const arr = data.searchHistory
      arr.unshift(msg.data)
      chrome.storage.local.set({ searchHistory: arr })
    })
  }
  if (msg.action === "openHistory") {
    chrome.tabs.create({ url: chrome.runtime.getURL("history.html") }).then(tab => {
      if (tab && tab.id) {
        chrome.tabs.update(tab.id, { active: true })
      }
    })
  }
  if (msg.action === "getParseState") {
    sendResponse({
      inProgress: isParsing,
      pagesDone,
      totalPeople,
      totalPages
    })
  }
  if (msg.action === "leakedinDone") {
    isParsing = false
  }
  return true
})
