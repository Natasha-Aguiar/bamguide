// Ensure docs.js is loaded
if (!window.docss) {
  console.error('docs.js not found or failed to load');
}

const searchInput = document.getElementById('search-query');
const resultsContainer = document.getElementById('search-results');

// Set up Fuse.js options
const fuse = new Fuse(window.docss, {
  keys: ['title', 'content'],
  includeScore: true,
  threshold: 0.4, // lower = stricter
  minMatchCharLength: 2
});

// If search term passed in query string, run search
const params = new URLSearchParams(window.location.search);
const initialQuery = params.get('q');
if (initialQuery) {
  searchInput.value = initialQuery;
  runSearch(initialQuery);
}

// Search input live updates
searchInput.addEventListener('input', (e) => {
  runSearch(e.target.value);
});

function runSearch(query) {
  resultsContainer.innerHTML = '';
  if (!query.trim()) return;

  const results = fuse.search(query);

  if (!results.length) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  results.forEach(({ item }) => {
    const excerpt = getExcerpt(item.content, query);
    resultsContainer.innerHTML += `
      <div class="search-result">
        <h2><a href="/bamguide/core/${item.url}">${item.title}</a></h2>
        <p>${excerpt}</p>
      </div>
    `;
  });
}

function getExcerpt(content, term, length = 150) {
  const idx = content.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return content.slice(0, length) + '...';
  const start = Math.max(0, idx - length / 2);
  const end = Math.min(content.length, idx + length / 2);
  return '...' + content.slice(start, end) + '...';
}
