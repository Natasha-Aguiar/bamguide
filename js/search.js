// search.js

console.log("✅ search.js loaded");

// Wait for DOM
document.addEventListener("DOMContentLoaded", function () {
  if (!window.docss || !Array.isArray(window.docss)) {
    console.error("❌ Search dataset (window.docss) not loaded or not an array");
    return;
  }

  console.log(`✅ Search dataset loaded: ${window.docss.length} entries`);

  const searchInput = document.getElementById("search-query");
  const resultsContainer = document.getElementById("results");
  const resultsCount = document.getElementById("results-count");

  // Init Fuse.js
  const fuse = new Fuse(window.docss, {
    keys: ["title", "content"],
    includeScore: true,
    threshold: 0.4,
    minMatchCharLength: 2,
  });

  // Read ?q= from URL
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q")?.trim();

  if (query) {
    searchInput.value = query;
    doSearch(query);
  }

  // Live typing
  searchInput.addEventListener("input", (e) => {
    doSearch(e.target.value.trim());
  });

  function doSearch(term) {
    if (!term) {
      resultsContainer.innerHTML = "<p>Type to search…</p>";
      resultsCount.textContent = "";
      return;
    }

    const results = fuse.search(term);

    if (results.length) {
      resultsCount.textContent = `${results.length} result(s) found for "${term}"`;

      resultsContainer.innerHTML = results
        .map(({ item }) => {
          const excerpt = getExcerpt(item.content, term);
          return `
            <div class="nsw-list-item">
              <div class="nsw-list-item__content">
                <div class="nsw-list-item__title">
                  <a href="/bamguide/${item.url}">${item.title}</a>
                </div>
                <div class="nsw-list-item__copy">${excerpt}</div>
              </div>
            </div>
          `;
        })
        .join("");
    } else {
      resultsCount.textContent = `No results found for "${term}"`;
      resultsContainer.innerHTML = "";
    }
  }

  function getExcerpt(content, term, length = 160) {
    const idx = content.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return content.slice(0, length) + "...";
    const start = Math.max(0, idx - length / 2);
    const end = Math.min(content.length, idx + length / 2);
    return "..." + content.slice(start, end) + "...";
  }
});
