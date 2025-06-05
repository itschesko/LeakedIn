// content.js
if (typeof window.nonLatinToLatinMap === "undefined") {
  window.nonLatinToLatinMap = {
    "А": "A",   "Б": "B",   "В": "V",   "Г": "G",   "Д": "D",   "Е": "E",   "Ё": "Yo",
    "Ж": "Zh",  "З": "Z",   "И": "I",   "Й": "Y",   "К": "K",   "Л": "L",   "М": "M",
    "Н": "N",   "О": "O",   "П": "P",   "Р": "R",   "С": "S",   "Т": "T",   "У": "U",
    "Ф": "F",   "Х": "Kh",  "Ц": "Ts",  "Ч": "Ch",  "Ш": "Sh",  "Щ": "Shch", "Ъ": "",
    "Ы": "Y",   "Ь": "",    "Э": "E",   "Ю": "Yu",  "Я": "Ya",
    "а": "a",   "б": "b",   "в": "v",   "г": "g",   "д": "d",   "е": "e",   "ё": "yo",
    "ж": "zh",  "з": "z",   "и": "i",   "й": "y",   "к": "k",   "л": "l",   "м": "m",
    "н": "n",   "о": "o",   "п": "p",   "р": "r",   "с": "s",   "т": "t",   "у": "u",
    "ф": "f",   "х": "kh",  "ц": "ts",  "ч": "ch",  "ш": "sh",  "щ": "shch", "ъ": "",
    "ы": "y",   "ь": "",    "э": "e",   "ю": "yu",  "я": "ya",
    "Ґ": "G",   "ґ": "g",   "Є": "Ye",  "є": "ye",  "І": "I",   "і": "i",   "Ї": "Yi",
    "ї": "yi",  "Ў": "U",   "ў": "u",
    "Α": "A",   "Β": "B",   "Γ": "G",   "Δ": "D",   "Ε": "E",   "Ζ": "Z",   "Η": "E",
    "Θ": "Th",  "Ι": "I",   "Κ": "K",   "Λ": "L",   "Μ": "M",   "Ν": "N",   "Ξ": "X",
    "Ο": "O",   "Π": "P",   "Ρ": "R",   "Σ": "S",   "Τ": "T",   "Υ": "Y",   "Φ": "F",
    "Χ": "Ch",  "Ψ": "Ps",  "Ω": "O",
    "α": "a",   "β": "b",   "γ": "g",   "δ": "d",   "ε": "e",   "ζ": "z",   "η": "e",
    "θ": "th",  "ι": "i",   "κ": "k",   "λ": "l",   "μ": "m",   "ν": "n",   "ξ": "x",
    "ο": "o",   "π": "p",   "ρ": "r",   "σ": "s",   "ς": "s",   "τ": "t",   "υ": "y",
    "φ": "f",   "χ": "ch",  "ψ": "ps",  "ω": "o",
    "א": "a",   "ב": "b",   "ג": "g",   "ד": "d",   "ה": "h",   "ו": "v",   "ז": "z",
    "ח": "kh",  "ט": "t",   "י": "y",   "כ": "k",   "ך": "k",   "ל": "l",   "מ": "m",
    "ם": "m",   "נ": "n",   "ן": "n",   "ס": "s",   "ע": "a",   "פ": "p",   "ף": "p",
    "צ": "tz",  "ץ": "tz",  "ק": "k",   "ר": "r",   "ש": "sh",  "ת": "t",
    "ְ": "", "ֱ": "", "ֲ": "", "ֳ": "", "ִ": "", "ֵ": "", "ֶ": "", "ַ": "",
    "ָ": "", "ֹ": "", "ֻ": "", "ּ": "", "ֽ": "",
    "ا": "a",   "أ": "a",   "إ": "i",   "آ": "aa",  "ب": "b",   "ت": "t",   "ث": "th",
    "ج": "j",   "ح": "h",   "خ": "kh",  "د": "d",   "ذ": "dh",  "ر": "r",   "ز": "z",
    "س": "s",   "ش": "sh",  "ص": "s",   "ض": "d",   "ط": "t",   "ظ": "z",   "ع": "a",
    "غ": "gh",  "ف": "f",   "ق": "q",   "ك": "k",   "ل": "l",   "م": "m",   "ن": "n",
    "ه": "h",   "و": "w",   "ي": "y",   "ى": "a",   "ء": "'",   "ئ": "'",   "ؤ": "'",
    "ة": "h",
    "َ": "", "ً": "", "ُ": "", "ٌ": "", "ِ": "", "ٍ": "", "ْ": "", "ّ": "",
    "Ա": "A",   "Բ": "B",   "Գ": "G",   "Դ": "D",   "Ե": "Ye",  "Զ": "Z",   "Է": "E",
    "Ը": "E",   "Թ": "T",   "Ժ": "Zh",  "Ի": "I",   "Լ": "L",   "Խ": "Kh",  "Ծ": "Ts",
    "Կ": "K",   "Հ": "H",   "Ձ": "Dz",  "Ղ": "Gh",  "Ճ": "Ch",  "Մ": "M",   "Յ": "Y",
    "Ն": "N",   "Շ": "Sh",  "Ո": "O",   "Չ": "Ch",  "Պ": "P",   "Ջ": "J",   "Ռ": "R",
    "Ս": "S",   "Վ": "V",   "Տ": "T",   "Ր": "R",   "Ց": "Ts",  "Ւ": "U",   "Փ": "P",
    "Ք": "Q",   "Օ": "O",   "Ֆ": "F",
    "ա": "a",   "բ": "b",   "գ": "g",   "դ": "d",   "ե": "ye",  "զ": "z",   "է": "e",
    "ը": "e",   "թ": "t",   "ժ": "zh",  "ի": "i",   "լ": "l",   "խ": "kh",  "ծ": "ts",
    "կ": "k",   "հ": "h",   "ձ": "dz",  "ղ": "gh",  "ճ": "ch",  "մ": "m",   "յ": "y",
    "ն": "n",   "շ": "sh",  "ո": "o",   "չ": "ch",  "պ": "p",   "ջ": "j",   "ռ": "r",
    "ս": "s",   "վ": "v",   "տ": "t",   "ր": "r",   "ց": "ts",  "ւ": "u",   "փ": "p",
    "ք": "q",   "օ": "o",   "ֆ": "f"
  }
}
function transliterateNonLatin(text) {
  return Array.from(text).map(char => {
    if (window.nonLatinToLatinMap.hasOwnProperty(char)) {
      return window.nonLatinToLatinMap[char]
    }
    return char
  }).join("")
}
function sleepRandom(minMs, maxMs) {
  const delta = maxMs - minMs
  const rnd = Math.floor(Math.random() * (delta + 1)) + minMs
  return new Promise(resolve => setTimeout(resolve, rnd))
}
function parseCurrentPage(postfix, delimiter) {
  const results = document.querySelectorAll("[data-chameleon-result-urn]")
  const users = []
  results.forEach(result => {
    const urn = result.getAttribute("data-chameleon-result-urn")
    if (!urn || urn.includes("headless")) return
    const spans = result.querySelectorAll("span[aria-hidden=true]")
    if (spans.length === 0) return
    const fullNameRaw = spans[0].innerText.trim()
    const fullName = transliterateNonLatin(fullNameRaw)
    let link = ""
    const linkElem = spans[0].closest("a")
    if (linkElem) {
      link = linkElem.href.split("?")[0]
    }
    const infoElem = result.querySelector("div.t-14.t-black.t-normal")
    const info = infoElem ? infoElem.innerText.trim() : ""
    const geoElem = result.querySelector("div.t-14.t-normal:not(.t-black)")
    const geoloc = geoElem ? geoElem.innerText.trim() : ""
    const currElem = result.querySelector(".entity-result__summary--2-lines")
    const current = currElem ? currElem.innerText.trim() : ""
    const words = fullName.split(" ")
    let email = ""
    if (words.length >= 2) {
      let cleanPostfix = postfix ? postfix.replace(/^@/, "") : "example.com"
      email = `${words[0][0]}${delimiter}${words[1]}@${cleanPostfix}`.toLowerCase()
    } else if (words.length === 1) {
      let cleanPostfix = postfix ? postfix.replace(/^@/, "") : "example.com"
      email = `${words[0]}@${cleanPostfix}`.toLowerCase()
    }
    users.push({ email, name: fullName, link, info, geoloc, current })
  })
  return users
}
function toTSV(allUsers, postfix, delimiter) {
  const header = ["Email", "Full Name", "Location", "Current Job", "Info", "Link"]
  const rows = [header]
  allUsers.forEach(u => {
   
    rows.push([u.email, u.name, u.geoloc, u.current, u.info, u.link])
  })
  return rows.map(r => r.join("\t")).join("\n")
}
function triggerDownload(tsvContent, filename) {
  const blob = new Blob([new TextEncoder().encode(tsvContent)], {
    type: "text/tab-separated-values;charset=utf-8"
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
if (typeof window.leakedInParseInProgress === "undefined") {
  window.leakedInParseInProgress = false
}
async function clickPageButton(pageNum) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const selector = `button[aria-label="Page ${pageNum}"]:not([disabled])`
    const btn = document.querySelector(selector)
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", block: "center" })
      btn.click()
      await new Promise(r => setTimeout(r, 2000))
      return true
    }
    window.scrollBy(0, window.innerHeight)
    await sleepRandom(800, 1500)
  }
  return false
}
async function leakedInParseListener(request, sender, sendResponse) {
  if (request.action === "startParse") {
    if (window.leakedInParseInProgress) return
    window.leakedInParseInProgress = true
    const { from, to, postfix, delimiter } = request
    let allUsers = []
    let totalPeopleCount = 0
    let pagesDone = 0
    // Navigate to starting page
    await clickPageButton(from)
    let pageNum = from
    while (pageNum <= to) {
      const users = parseCurrentPage(postfix, delimiter)
      allUsers = allUsers.concat(users)
      totalPeopleCount += users.length
      pagesDone++
      chrome.runtime.sendMessage({ action: "updateProgress", pagesDone })
      chrome.runtime.sendMessage({ action: "updatePeopleCount", peopleCount: totalPeopleCount })
      if (pageNum === to) break
      const nextPage = pageNum + 1
      const found = await clickPageButton(nextPage)
      if (!found) break
      pageNum++
    }
    const tsv = toTSV(allUsers, postfix, delimiter)
    const date = new Date().toISOString().split("T")[0]
    const filename = `leakedin-${postfix}-${allUsers.length}-${date}.tsv`
    try {
      const url = new URL(window.location.href)
      const params = new URLSearchParams(url.search)
      const keyword = params.get("keywords") || ""
      let companyIds = []
      let companyNames = []
      const companyParam = params.get("currentCompany")
      if (companyParam) {
        try {
          companyIds = JSON.parse(companyParam)
        } catch (e) {
          companyIds = companyParam.replace(/\[|\]|"/g, "").split(",")
        }
      }
      companyIds.forEach(id => {
        const input = document.querySelector(`input#currentCompany-${id}`)
        if (input) {
          const li = input.closest("li.search-reusables__collection-values-item")
          if (li) {
            const nameSpan = li.querySelector("span[aria-hidden=\"true\"]")
            const name = nameSpan ? nameSpan.innerText.trim().replace(/\s+/g, " ") : id
            companyNames.push(`${name} [${id}]`)
          } else {
            companyNames.push(`[${id}]`)
          }
        } else {
          companyNames.push(`[${id}]`)
        }
      })
      const companyNamesString = companyNames.join(", ")
      chrome.runtime.sendMessage({
        action: "saveSearchHistory",
        data: {
          date: new Date().toISOString(),
          keyword: keyword || "",
          companyIds: companyIds || [],
          companyNames: companyNamesString,
          employees: allUsers.length,
          entries: allUsers,
          postfix: postfix
        }
      })
    } catch (e) {}
    chrome.runtime.sendMessage({ action: "openHistory" })
    chrome.runtime.sendMessage({ action: "leakedinDone" })
    window.leakedInParseInProgress = false
  }
}
if (window.leakedInListenerAdded) {
  chrome.runtime.onMessage.removeListener(window.leakedInParseListenerRef)
}
chrome.runtime.onMessage.addListener(leakedInParseListener)
window.leakedInParseListenerRef = leakedInParseListener
window.leakedInListenerAdded = true
