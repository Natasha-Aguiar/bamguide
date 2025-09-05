// search.js — replace your current file with this
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-query');
  const resultsContainer = document.getElementById('results');
  const resultsCount = document.getElementById('results-count');

  const useFuse = typeof Fuse !== 'undefined';
  let fuse = null;
  if (useFuse) {
    fuse = new Fuse(window.docss || [], {
      keys: ['title', 'content'],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2,
    });
    console.log('✅ Fuse.js ready');
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // read ?q=
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q')?.trim() || '';

  if (initialQuery && searchInput) {
    searchInput.value = initialQuery;
    doSearch(initialQuery);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      doSearch(e.target.value.trim());
    });
  }

  // store clicked term in sessionStorage (fallback)
  if (resultsContainer) {
    resultsContainer.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      // if link includes our "#match-" anchor, store the search term
      if (a.hash && a.hash.indexOf('#match-') === 0) {
        const termToStore = (searchInput && searchInput.value) || initialQuery || '';
        if (termToStore) sessionStorage.setItem('bamguide-search-term', termToStore);
        // Allow navigation
      }
    });
  }

  function doSearch(term) {
    if (!term) {
      if (resultsContainer) resultsContainer.innerHTML = '<p>Type to search…</p>';
      if (resultsCount) resultsCount.textContent = '';
      return;
    }

    let results = [];
    if (useFuse && fuse) {
      results = fuse.search(term).map(r => r.item);
    } else {
      results = (window.docss || []).filter(doc =>
        (doc.title || '').toLowerCase().includes(term.toLowerCase()) ||
        (doc.content || '').toLowerCase().includes(term.toLowerCase())
      );
    }

    if (!results.length) {
      if (resultsCount) resultsCount.textContent = `No results found for "${term}"`;
      if (resultsContainer) resultsContainer.innerHTML = '';
      return;
    }

    // Build results: one page block with multiple snippet links per page
    let totalMatches = 0;
    const rendered = results.map((item, pageIndex) => {
      const { snippets, matches } = getAllExcerpts(item, term, 160, 10, pageIndex);
      totalMatches += matches;

      // Show title once, snippets underneath — link includes ?q=term so content page can read it
      return `
        <div class="nsw-list-item">
          <div class="nsw-list-item__content">
            <div class="nsw-list-item__title">
              <a href="/bamguide/${item.url}?q=${encodeURIComponent(term)}">${item.title}</a>
            </div>
            <div class="nsw-list-item__copy">
              ${snippets}
            </div>
          </div>
        </div>
      `;
    });

    if (resultsCount) resultsCount.textContent = `${totalMatches} result(s) found for "${term}" across ${results.length} page(s)`;
    if (resultsContainer) resultsContainer.innerHTML = rendered.join('');
  }

  function highlightText(text, term) {
    const re = new RegExp(`(${escapeRegExp(term)})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  // returns { snippets: HTMLstring, matches: number }
  function getAllExcerpts(item, term, length = 160, maxSnippets = 5, pageIndex = 0) {
    const content = item.content || '';
    const re = new RegExp(escapeRegExp(term), 'gi');
    let match;
    let snippets = [];
    let matches = 0;
    let lastStart = -Infinity;
    let snippetIndex = 0;

    while ((match = re.exec(content)) !== null && snippetIndex < maxSnippets) {
      const idx = match.index;

      // If this match falls very close to the previous snippet center, skip it (dedupe)
      if (idx <= lastStart + (length / 2)) {
        matches++;
        continue;
      }

      const start = Math.max(0, idx - Math.floor(length / 2));
      const end = Math.min(content.length, idx + Math.floor(length / 2));
      let snippet = content.slice(start, end).trim();

      // highlight the term inside the snippet
      snippet = highlightText(snippet, term);

      // create anchor that includes ?q=term and the hash with page+match index
      const matchNum = snippetIndex + 1;
      const href = `/bamguide/${item.url}?q=${encodeURIComponent(term)}#match-${pageIndex + 1}-${matchNum}`;

      snippets.push(`…<a href="${href}">${snippet}</a>…`);
      lastStart = idx;
      snippetIndex++;
      matches++;
    }

    return { snippets: snippets.join('<br/><br/>') || '…', matches };
  }
});
