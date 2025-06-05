let allHistory = [];

function renderTable(entries) {
  const tbody = document.getElementById("historyTableBody");
  tbody.innerHTML = "";
  entries.forEach((entry, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${entry.postfix || ""}</td>
      <td>${entry.keyword || ""}</td>
      <td>${(entry.companyNames || entry.company || []).join ? (entry.companyNames || entry.company || []).join(', ') : (entry.companyNames || entry.company || "")}</td>
      <td>${entry.employees || entry.emp || ""}</td>
      <td>${entry.date ? new Date(entry.date).toLocaleString() : (entry.date || "")}</td>
      <td>
        <button class="btn-download" data-idx="${idx}">Download</button>
        <button class="btn-delete" data-idx="${idx}">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Download handler
  tbody.querySelectorAll('.btn-download').forEach(btn => {
    btn.onclick = function() {
      const idx = parseInt(this.getAttribute('data-idx'), 10);
      const entry = entries[idx];
      if (!entry.entries || !entry.entries.length) {
        alert('No data to export for this search.');
        return;
      }
      // Build TSV
      const header = ["Email", "Full Name", "Location", "Current Job", "Info", "Link"];
      const rows = [header];
      entry.entries.forEach(u => {
        rows.push([
          u.email || "",
          u.name || "",
          u.geoloc || "",
          u.current || "",
          u.info || "",
          u.link || ""
        ]);
      });
      const tsv = rows.map(r => r.join("\t")).join("\n");
      const blob = new Blob([tsv], { type: "text/tab-separated-values" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `leakedin-${entry.postfix || 'blank'}-${entry.employees || 0}-${entry.date ? entry.date.split('T')[0] : ''}.tsv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
  });

  // Delete handler
  tbody.querySelectorAll('.btn-delete').forEach(btn => {
    btn.onclick = function() {
      const idx = parseInt(this.getAttribute('data-idx'), 10);
      if (!confirm('Delete this search entry?')) return;
      allHistory.splice(idx, 1);
      chrome.storage.local.set({searchHistory: allHistory}, () => {
        renderTable(allHistory);
      });
    };
  });
}

function loadHistory() {
  if (!chrome.storage || !chrome.storage.local) {
    renderTable([]);
    return;
  }
  chrome.storage.local.get({searchHistory: []}, (result) => {
    allHistory = result.searchHistory || [];
    renderTable(allHistory);
  });
}

document.getElementById('searchInput').oninput = function() {
  const query = this.value.toLowerCase();
  const filtered = allHistory.filter(entry =>
    (entry.keyword || "").toLowerCase().includes(query) ||
    ((entry.companyNames || entry.company || []).join
      ? (entry.companyNames || entry.company || []).join(', ')
      : (entry.companyNames || entry.company || "")).toLowerCase().includes(query)
  );
  renderTable(filtered);
};

document.getElementById('eraseAllBtn').onclick = function() {
  if (confirm('Erase all search history?')) {
    chrome.storage.local.set({searchHistory: []}, () => {
      allHistory = [];
      renderTable([]);
    });
  }
};

window.onload = loadHistory;

document.addEventListener('visibilitychange', function() {
  if (!document.hidden) loadHistory();
});
  