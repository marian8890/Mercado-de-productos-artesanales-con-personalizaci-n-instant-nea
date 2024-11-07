document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cartCount");
    const cartItemsSection = document.getElementById("cartItems");

    // Cargar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();
    renderCartItems();

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function renderCartItems() {
        // Si el carrito está vacío
        if (cart.length === 0) {
            cartItemsSection.innerHTML = "<p>No hay productos en tu carrito.</p>";
        } else {
            cartItemsSection.innerHTML = "";
            cart.forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("cart-item");
                productItem.textContent = product; // Puedes agregar más detalles aquí si deseas
                cartItemsSection.appendChild(productItem);
            });
        }
    }
});
