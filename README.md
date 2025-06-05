<p align="center">
  <img src="leakedin.png" width="500">
</p>

> When I've used public HR and other OSINT tools to parse LinkedIn, I've noticed that they send a lot of requests to LinkedIn and end up banning your account. I've come up with the idea of this kind of extension to mimic real user behavior and only take data from the search results, not query individual profiles.
# LeakedIn Parser

**LeakedIn Parser** is a Chrome extension for parsing LinkedIn People Search results and exporting the data for OSINT or research purposes. The extension doesn't send unnecessary requests to LinkedIn to minimize the risk of your account being blocked, it just parses the frontend and iterates over result pages with random time intervals.<br><br> **NOTE: You can run out of search quota — it's generous but not unlimited (about 300-400 pages per month based on my observations)**




> ⚠️ **Disclaimer**  
> This tool is intended strictly for **authorized use** only. It is designed for **red teamers, security researchers, and OSINT professionals** with **explicit permission** to perform reconnaissance or data analysis.  
> Any use for unauthorized data scraping, or criminal activity is strictly forbidden.  
> The developer assumes no liability for misuse or illegal activity conducted with this tool.

---

## Screenshots

![search](https://github.com/user-attachments/assets/86bf088d-ed1b-4ae9-a9f6-98226ebf6667)
![history](https://github.com/user-attachments/assets/c7df9a94-27a2-405f-ae6c-485a466cedea)
![tsv](https://github.com/user-attachments/assets/027a8716-1f7a-425e-aadb-8427ec17ef92)

---

## Features

- **Parse LinkedIn People Search results**  
  Collects information from multiple result pages with automatic iteration.
- **Guess emails**  
  Generates email addresses based on employee names and a user-defined postfix.
- **Parsed history view**  
  Ability to view and redownload previous searches

---

## Installation

1. Clone or download and extract this repository.
3. Open Chrome and go to `chrome://extensions`.
4. Enable "Developer mode" (top right).
5. Click "Load unpacked" and select the project directory.
6. The LeakedIn Parser icon will appear in your Chrome toolbar.

---

## Usage

1. Go to a [LinkedIn People Search](https://www.linkedin.com/search/results/people/) page.
2. Input employee search parameters on the LinkedIn page (e.g. keyword, current company), and wait for results.
3. Click the LeakedIn Parser extension icon.
4. Set your options (email postfix, page range, etc.).
5. Click **Parse**. The extension will collect the specified results. **NOTE: Linkedin tab should be active**
6. After parsing, the **History** page will automatically open in a new tab. You can view, download, or delete saved entries.

---

## License

This project is distributed under a **custom license**. See [LICENSE](LICENSE) for full terms.

> ⚠️ **Disclaimer**  
> This tool is intended strictly for **authorized red team / pentest and OSINT research** on systems for which you have **explicit written permission**.  
> You may **not** use it for commercial purposes, unauthorized or criminal activities, or any form of data theft or privacy invasion.  
> The author assumes no liability for misuse.

© 2025 itschesko (itschesko@proton.me)

