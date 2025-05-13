export function productCardTemplate(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <span>${product.price}</span>
    </div>
  `;
}
