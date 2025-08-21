// search.js
document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("search-query");
  const resultsContainer = document.getElementById("results");
  const resultsCount = document.getElementById("results-count");

  let useFuse = typeof Fuse !== "undefined";

  // Init Fuse.js if available
  let fuse = null;
  if (useFuse) {
    fuse = new Fuse(window.docss, {
      keys: ["title", "content"],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2,
    });
    console.log("✅ Fuse.js ready");
  } else {
    console.warn("⚠️ Fuse.js not found, falling back to basic search");
  }

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

    let results = [];

    if (useFuse && fuse) {
      results = fuse.search(term).map(r => r.item);
    } else {
      // fallback: simple substring search
      results = window.docss.filter(doc =>
        doc.title.toLowerCase().includes(term.toLowerCase()) ||
        doc.content.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (results.length) {
      resultsCount.textContent = `${results.length} result(s) found for "${term}"`;

      resultsContainer.innerHTML = results
        .map(item => {
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

  // Highlight matching term in string
  function highlightText(text, term) {
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  function getExcerpt(content, term, length = 160) {
    const idx = content.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return content.slice(0, length) + "...";
    const start = Math.max(0, idx - length / 2);
    const end = Math.min(content.length, idx + length / 2);
    const snippet = content.slice(start, end);
    return highlightText(snippet, term) + "...";
  }
});
