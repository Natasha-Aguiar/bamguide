document.addEventListener("DOMContentLoaded", () => {
  if (!window.docss || !Array.isArray(window.docss)) {
    console.error("Search dataset (window.docss) not loaded.");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q")?.toLowerCase().trim() || "";

  const resultsContainer = document.querySelector("#results");
  const countContainer = document.querySelector("#results-count");

  if (!resultsContainer) {
    console.error("No #results container found in HTML.");
    return;
  }

  if (query) {
    const results = window.docss.filter(doc =>
      doc.title.toLowerCase().includes(query) ||
      doc.content.toLowerCase().includes(query)
    );

    if (results.length) {
      countContainer.textContent = `${results.length} results found for "${query}"`;

      resultsContainer.innerHTML = results.map(doc => {
        const excerpt = getExcerpt(doc.content, query);
        return `
          <div class="nsw-list-item">
            <div class="nsw-list-item__content">
              <div class="nsw-list-item__title">
                <a href="/bamguide/${doc.url}">${doc.title}</a>
              </div>
              <div class="nsw-list-item__copy">
                ${excerpt}
              </div>
            </div>
          </div>
        `;
      }).join("");
    } else {
      countContainer.textContent = `No results found for "${query}"`;
      resultsContainer.innerHTML = "";
    }
  } else {
    countContainer.textContent = "Please enter a search term.";
  }
});

// helper: extract ~150 chars around the match
function getExcerpt(content, term, length = 150) {
  const idx = content.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return content.slice(0, length) + "...";
  const start = Math.max(0, idx - length / 2);
  const end = Math.min(content.length, idx + length / 2);
  return "..." + content.slice(start, end) + "...";
}
