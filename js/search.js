// search.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-query');
  const resultsContainer = document.getElementById('results');
  const resultsCount = document.getElementById('results-count');
  if (!searchInput || !resultsContainer || !resultsCount) return;

  const useFuse = typeof Fuse !== 'undefined' && Array.isArray(window.docss);
  let fuse = null;
  if (useFuse) {
    fuse = new Fuse(window.docss, {
      keys: ['title', 'subtitle', 'content'],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2
    });
    console.log('✅ Fuse.js ready');
  } else {
    console.warn('⚠️ Fuse.js not found or dataset missing — falling back to basic search');
  }

  // read initial ?q=
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
        (doc.subtitle && doc.subtitle.toLowerCase().includes(term.toLowerCase())) ||
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
      const content = item.content || '';
      const excerpts = getAllExcerpts(content, term, 160, 5, pageIndex, item.url || '');
      totalMatches += countMatches(content, term);

      const titleEsc = escapeHtml(item.title || '');
      const subtitleHtml = item.subtitle ? `<div class="nsw-list-item__subtitle">${escapeHtml(item.subtitle)}</div>` : '';
      const pageLink = `/bamguide/${item.url || ''}?q=${encodeURIComponent(term)}`;

      return `
        <div class="nsw-list-item">
          <div class="nsw-list-item__content">
          ${subtitleHtml}
            <div class="nsw-list-item__title">
              ${titleEsc}
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

  // utilities
  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  function escapeHtml(unsafe) {
    return (unsafe + '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function highlightText(text, term) {
    const re = new RegExp(escapeRegExp(term), 'gi');
    return text.replace(re, '<mark>$&</mark>');
  }

  function countMatches(content, term) {
    const regex = new RegExp(escapeRegExp(term), 'gi');
    return (content.match(regex) || []).length;
  }

  // Build multiple non-overlapping snippet links for a single page.
  // The anchor format is: #match-<pageIndex+1>-<absoluteMatchIndex>
  function getAllExcerpts(content, term, length = 160, maxSnippets = 5, pageIndex = 0, url = '') {
    if (!content) return '';
    const regex = new RegExp(escapeRegExp(term), 'gi');
    const allMatchPositions = [];
    let m;
    while ((m = regex.exec(content)) !== null) {
      allMatchPositions.push(m.index);
    }
    if (allMatchPositions.length === 0) return '';

    const snippets = [];
    const seen = new Set();
    const minDistance = Math.floor(length / 2); // skip matches closer than this to previous chosen snippet

    let lastChosenPos = -Infinity;

    for (let i = 0; i < allMatchPositions.length && snippets.length < maxSnippets; i++) {
      const idx = allMatchPositions[i];
      if (idx - lastChosenPos < minDistance) {
        // too close to previously chosen snippet - skip to avoid near-duplicates
        continue;
      }

      lastChosenPos = idx;

      const start = Math.max(0, idx - Math.floor(length / 2));
      const end = Math.min(content.length, idx + Math.floor(length / 2));
      let snippet = content.slice(start, end).trim();

      // basic dedupe by normalized text
      const norm = snippet.replace(/\s+/g, ' ').toLowerCase();
      if (seen.has(norm)) continue;
      seen.add(norm);

      // absolute match number is the index into allMatchPositions + 1 (1-based)
      const absoluteMatchIndex = i + 1;
      const href = `/bamguide/${url}?q=${encodeURIComponent(term)}#match-${pageIndex + 1}-${absoluteMatchIndex}`;

      // add class "search-snippet" so the page-side highlighter can skip this link's text nodes if needed
      const linked = `<a class="search-snippet" href="${href}">${highlightText(escapeHtml(snippet), term)}</a>`;
      snippets.push(`…${linked}…`);
    }

    return snippets.join('<br/><br/>');
  }
});
