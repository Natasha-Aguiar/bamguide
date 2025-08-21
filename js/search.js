console.log("✅ search.js loaded");

if (!window.docss || !Array.isArray(window.docss)) {
  console.error("❌ Search dataset not found (check search-data.js)");
} else {
  console.log("✅ Search dataset loaded:", window.docss.length);

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q")?.toLowerCase() || "";
  const resultsContainer = document.querySelector("#results");
  const resultsCount = document.querySelector("#results-count");

  if (query) {
    const results = window.docss.filter(doc => {
      return (
        doc.title.toLowerCase().includes(query) ||
        doc.content.toLowerCase().includes(query)
      );
    });

    if (results.length) {
      resultsCount.innerHTML = `<p>${results.length} result(s) found for "<strong>${query}</strong>"</p>`;
      resultsContainer.innerHTML = results
        .map(doc => {
          const excerpt = getExcerpt(doc.content, query);
          return `
            <div class="nsw-results-list__item">
              <a href="${doc.url}">
                <h3 class="nsw-results-list__title">${highlightText(doc.title, query)}</h3>
                <p class="nsw-results-list__summary">${excerpt}</p>
              </a>
            </div>
          `;
        })
        .join("");
    } else {
      resultsCount.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
      resultsContainer.innerHTML = "";
    }
  }

  // Highlight matching term in string
  function highlightText(text, term) {
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  // Generate excerpt around search term with highlighting
  function getExcerpt(content, term, length = 160) {
    const idx = content.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return content.slice(0, length) + "...";
    const start = Math.max(0, idx - length / 2);
    const end = Math.min(content.length, idx + length / 2);
    const snippet = content.slice(start, end);
    return highlightText(snippet, term) + "...";
  }
}
