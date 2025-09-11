//In seach.html when link is clicked scroll to the linked section and highlight each instance of the word searched  

document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const term = params.get('q');
  const hash = window.location.hash || '';
  if (!term) return;

  let targetMatch = null;
  if (hash.startsWith('#match-')) {
    const parts = hash.slice(1).split('-');
    if (parts.length >= 3) targetMatch = parseInt(parts[2], 10);
  }

  const main = document.querySelector('.nsw-docs__main');
  if (!main) return;

  const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');

  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const tag = node.parentNode.nodeName.toLowerCase();
      const skip = ['script','style','code','pre','textarea','a','noscript'];
      if (skip.includes(tag)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  let matchCount = 0;
  nodes.forEach(node => {
    const text = node.nodeValue;
    let lastIdx = 0;
    let m;
    const frag = document.createDocumentFragment();

    while ((m = regex.exec(text)) !== null) {
      if (m.index > lastIdx) frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
      matchCount++;
      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.textContent = m[0];
      if (targetMatch && matchCount === targetMatch && hash.startsWith('#match-')) {
        mark.id = hash.slice(1);
      }
      frag.appendChild(mark);
      lastIdx = m.index + m[0].length;
    }

    if (lastIdx === 0) return;
    if (lastIdx < text.length) frag.appendChild(document.createTextNode(text.slice(lastIdx)));
    node.parentNode.replaceChild(frag, node);
  });

  if (hash && document.getElementById(hash.slice(1))) {
    setTimeout(() => {
      document.getElementById(hash.slice(1)).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  }
});
