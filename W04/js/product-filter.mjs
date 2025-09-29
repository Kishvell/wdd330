// product-filter.mjs
// This module filters products by category and displays them dynamically.

// Example inventory (replace with your team's inventory import if you already have one)
const products = [
  { id: 1, name: "Tent", category: "Camping", price: 129.99 },
  { id: 2, name: "Backpack", category: "Camping", price: 89.99 },
  { id: 3, name: "Hiking Boots", category: "Hiking", price: 149.99 },
  { id: 4, name: "Water Bottle", category: "Hiking", price: 19.99 },
  { id: 5, name: "Sleeping Bag", category: "Camping", price: 109.99 }
];

// Get DOM elements
const categorySelect = document.querySelector("#categoryFilter");
const productGrid = document.querySelector("#productGrid");

// Render products
function renderProducts(list) {
  productGrid.innerHTML = ""; // clear grid
  if (list.length === 0) {
    productGrid.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  list.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("product-card");
    item.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
    `;
    productGrid.appendChild(item);
  });
}

// Filter products when category changes
categorySelect.addEventListener("change", (e) => {
  const category = e.target.value;
  if (category === "All") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
});

// Initial render
renderProducts(products);
