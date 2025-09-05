// search.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-query');
  const resultsContainer = document.getElementById('results');
  const resultsCount = document.getElementById('results-count');
  if (!searchInput || !resultsContainer || !resultsCount) return;

  const useFuse = typeof Fuse !== 'undefined';
  let fuse = null;
  if (useFuse && Array.isArray(window.docss)) {
    fuse = new Fuse(window.docss, {
      keys: ['title', 'content'],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2
    });
    console.log('✅ Fuse.js ready');
  } else {
    console.warn('⚠️ Fuse.js not found or dataset missing — falling back to basic search');
  }

  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q')?.trim() || '';
  if (initialQuery) {
    searchInput.value = initialQuery;
    doSearch(initialQuery);
  }

  searchInput.addEventListener('input', (e) => {
    doSearch(e.target.value.trim());
  });

  function doSearch(term) {
    if (!term) {
      resultsContainer.innerHTML = '<p>Type to search…</p>';
      resultsCount.textContent = '';
      return;
    }

    let results = [];
    if (useFuse && fuse) {
      results = fuse.search(term).map(r => r.item);
    } else {
      const data = Array.isArray(window.docss) ? window.docss : [];
      results = data.filter(doc =>
        (doc.title && doc.title.toLowerCase().includes(term.toLowerCase())) ||
        (doc.content && doc.content.toLowerCase().includes(term.toLowerCase()))
      );
    }

    if (!results.length) {
      resultsCount.textContent = `No results found for "${term}"`;
      resultsContainer.innerHTML = '';
      return;
    }

    let totalMatches = 0;
    const renderedResults = results.map((item, pageIndex) => {
      const excerpts = getAllExcerpts(item.content || '', term, 160, 5, pageIndex, item.url || '');
      totalMatches += countMatches(item.content || '', term);
      return `
        <div class="nsw-list-item">
          <div class="nsw-list-item__content">
            <div class="nsw-list-item__title">
              <a href="/bamguide/${item.url}">${item.title}</a>
            </div>
            <div class="nsw-list-item__copy">
              ${excerpts}
            </div>
          </div>
        </div>
      `;
    });

    resultsCount.textContent = `${totalMatches} result${totalMatches !== 1 ? 's' : ''} found for "${term}" across ${results.length} page${results.length !== 1 ? 's' : ''}`;
    resultsContainer.innerHTML = renderedResults.join('');
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightText(text, term) {
    const regex = new RegExp(escapeRegExp(term), 'gi');
    return text.replace(regex, '<mark>$&</mark>');
  }

  function countMatches(content, term) {
    const regex = new RegExp(escapeRegExp(term), 'gi');
    return (content.match(regex) || []).length;
  }

  // Return multiple *non-overlapping* snippet links for a single page.
  // IMPORTANT: we compute the absolute match index (1-based) so anchors line up with the page-side highlighting.
  function getAllExcerpts(content, term, length = 160, maxSnippets = 5, pageIndex = 0, url = '') {
    const regex = new RegExp(escapeRegExp(term), 'gi');
    const allMatchPositions = [];
    let m;
    while ((m = regex.exec(content)) !== null) {
      allMatchPositions.push(m.index);
    }
    if (allMatchPositions.length === 0) return '';

    const snippets = [];
    const seen = new Set();
    const minDistance = Math.floor(length / 2); // avoid near-duplicate overlapping snippets
    let lastIdx = -Infinity;

    for (let i = 0; i < allMatchPositions.length && snippets.length < maxSnippets; i++) {
      const idx = allMatchPositions[i];
      if (idx - lastIdx < minDistance) {
        // skip matches that are too close to the previously used one
        continue;
      }
      lastIdx = idx;

      const start = Math.max(0, idx - Math.floor(length / 2));
      const end = Math.min(content.length, idx + Math.floor(length / 2));
      let snippet = content.slice(start, end).trim();

      // simple dedupe (avoid showing two nearly identical snippets)
      const norm = snippet.replace(/\s+/g, ' ').toLowerCase();
      if (seen.has(norm)) continue;
      seen.add(norm);

      const absoluteMatchIndex = i + 1; // 1-based index among all matches in this page
      const href = `/bamguide/${url}?q=${encodeURIComponent(term)}#match-${pageIndex + 1}-${absoluteMatchIndex}`;
      const linked = `<a class="search-snippet" href="${href}">${highlightText(snippet, term)}</a>`;
      snippets.push(linked);
    }

    return snippets.join('<br/><br/>');
  }
});
