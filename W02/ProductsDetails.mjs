export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // Fetch product details before rendering
    this.product = await this.dataSource.findProductById(this.productId);
    if (!this.product) {
      console.error("Product not found");
      return;
    }
    this.renderProductDetails();

    // Attach event listener for adding to cart
    document.getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  renderProductDetails() {
    if (!this.product) return;

    document.querySelector("#product-title").textContent = this.product.Name;
    document.querySelector("#product-description").textContent = this.product.Description;
    document.querySelector("#product-price").textContent = `$${this.product.Price}`;
    document.querySelector("#product-image").setAttribute("src", this.product.Image);
  }

  addProductToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(this.product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${this.product.Name} added to cart!`);
  }
}
