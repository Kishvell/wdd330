const libraryEl = document.getElementById("library");
const featuredEl = document.getElementById("featured-grid");
const searchInput = document.getElementById("search");
const template = document.getElementById("card-template");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const frame = document.getElementById("preview-frame");
const modalTitle = document.getElementById("modal-title");

let snippets = [];

async function loadSnippets() {
  const res = await fetch("components.json");
  snippets = await res.json();
  renderGrid(snippets);
  renderFeatured(snippets.slice(0, 3));
}

function renderGrid(list) {
  libraryEl.innerHTML = "";
  list.forEach(snippet => {
    const node = template.content.cloneNode(true);
    node.querySelector(".title").textContent = snippet.title;
    node.querySelector(".tags").textContent = snippet.tags.join(", ");
    node.querySelector(".open").addEventListener("click", () => openSnippet(snippet));
    node.querySelector(".copy").addEventListener("click", () => copySnippet(snippet));
    libraryEl.appendChild(node);
  });
}

function renderFeatured(list) {
  featuredEl.innerHTML = "";
  list.forEach(snippet => {
    const node = template.content.cloneNode(true);
    node.querySelector(".title").textContent = snippet.title;
    node.querySelector(".tags").textContent = snippet.tags.join(", ");
    node.querySelector(".open").addEventListener("click", () => openSnippet(snippet));
    node.querySelector(".copy").addEventListener("click", () => copySnippet(snippet));
    featuredEl.appendChild(node);
  });
}

function openSnippet(snippet) {
  modal.classList.remove("hidden");
  modalTitle.textContent = snippet.title;
  const doc = `
    <html><head><style>${snippet.css}</style></head>
    <body>${snippet.html}<script>${snippet.js || ""}<\/script></body></html>`;
  const blob = new Blob([doc], { type: "text/html" });
  frame.src = URL.createObjectURL(blob);
}

function closeModal() {
  modal.classList.add("hidden");
  frame.src = "";
}

async function copySnippet(snippet) {
  const combined = `<!-- HTML -->\n${snippet.html}\n\n/* CSS */\n${snippet.css}\n\n// JS\n${snippet.js || ""}`;
  await navigator.clipboard.writeText(combined);
  alert("Snippet copied to clipboard!");
}

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  if (q.length < 2) {
    renderGrid(snippets);
    return;
  }
  const filtered = snippets.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.tags.join(" ").toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q)
  );
  renderGrid(filtered);
});

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

loadSnippets();
