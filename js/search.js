// search.js
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the dataset is available
  if (!window.docss || !Array.isArray(window.docss)) {
    console.error('Search dataset not found (check search-data.js).');
    return;
  }

  // Grab query (?q=...) from URL
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') ? params.get('q').toLowerCase() : '';

  const input = document.getElementById('search-query');
  const resultsContainer = document.getElementById('results');
  const resultsCount = document.getElementById('results-count');

  // Populate the input with the query (so it shows what was searched)
  if (input && query) {
    input.value = query;
  }

  // Simple search function
  function runSearch(term) {
    if (!term) {
      resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
      resultsCount.textContent = '';
      return;
    }

    const results = window.docss.filter(doc =>
      (doc.title && doc.title.toLowerCase().includes(term)) ||
      (doc.content && doc.content.toLowerCase().includes(term))
    );

    if (results.length === 0) {
      resultsContainer.innerHTML = `<p>No results found for "<strong>${term}</strong>".</p>`;
      resultsCount.textContent = '';
      return;
    }

    resultsCount.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found`;

    resultsContainer.innerHTML = results.map(doc => {
      const excerpt = getExcerpt(doc.content, term);
      return `
        <div class="nsw-list-item">
          <div class="nsw-list-item__content">
            <div class="nsw-list-item__title">
              <a href="/bamguide/${doc.url}">${doc.title}</a>
            </div>
            <div class="nsw-list-item__copy">${excerpt}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Create a small excerpt around the search term
  function getExcerpt(content, term, length = 150) {
    const idx = content.toLowerCase().indexOf(term.toLowerCase());
    if (idx === -1) return content.slice(0, length) + '...';
    const start = Math.max(0, idx - length / 2);
    const end = Math.min(content.length, idx + length / 2);
    return '...' + content.slice(start, end) + '...';
  }

  // Run search immediately if ?q= is present
  if (query) {
    runSearch(query);
  }

  // Also allow searching again if user types and presses Enter
  if (input) {
    input.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        runSearch(input.value.toLowerCase().trim());
      }
    });
  }
});
