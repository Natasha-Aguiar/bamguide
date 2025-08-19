// Ensure docs.js is loaded
if (!window.docss) {
  console.error('docs.js not found or failed to load');
}

const searchInput = document.getElementById('search-query');

// Set up Fuse.js options
const fuse = new Fuse(window.docss, {
  keys: ['title', 'content'],
  includeScore: true,
  threshold: 0.4, // lower = stricter
  minMatchCharLength: 2
});

// Get query string
const params = new URLSearchParams(window.location.search);
const query = params.get('q')?.toLowerCase() || '';

// Grab search container
const resultsContainer = document.querySelector('#search-results');

if (query && resultsContainer) {
  const results = SEARCH_DOCS.filter(doc => {
    return (
      doc.label.toLowerCase().includes(query) ||
      doc.keywords.toLowerCase().includes(query)
    );
  });

  if (results.length) {
    resultsContainer.innerHTML = results.map(doc => `
      <li class="nsw-results-list__item">
        <a href="${doc.url}">
          <h3 class="nsw-results-list__title">${doc.label}</h3>
          <p class="nsw-results-list__summary">${doc.keywords}</p>
        </a>
      </li>
    `).join('');
  } else {
    resultsContainer.innerHTML = `<p>No results found for "${query}".</p>`;
  }
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


function getExcerpt(content, term, length = 150) {
  const idx = content.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return content.slice(0, length) + '...';
  const start = Math.max(0, idx - length / 2);
  const end = Math.min(content.length, idx + length / 2);
  return '...' + content.slice(start, end) + '...';
}
