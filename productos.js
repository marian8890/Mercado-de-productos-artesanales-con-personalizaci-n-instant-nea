document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cartCount");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Cargar el número de productos en el carrito desde el almacenamiento local (localStorage)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = button.getAttribute("data-product");
            addToCart(product);
        });
    });

    function addToCart(product) {
        // Verificar si el producto ya está en el carrito
        if (!cart.includes(product)) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        }
    }

    function updateCartCount() {
        // Actualizar el número de artículos en el carrito
        cartCount.textContent = cart.length;
    }
});
