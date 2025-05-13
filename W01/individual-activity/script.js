document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-list");

    // Load the cart on page load
    displayCart();

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", event => {
            const productElement = event.target.closest(".product");
            const product = {
                id: productElement.dataset.id,
                name: productElement.dataset.name,
                price: productElement.dataset.price
            };

            addProductToCart(product);
            displayCart(); // Refresh cart display after adding item
        });
    });

    // Function to add a product to the cart
    function addProductToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to retrieve and display cart items
    function displayCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartList.innerHTML = ""; // Clear previous cart display

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(li);
        });
    }
});
