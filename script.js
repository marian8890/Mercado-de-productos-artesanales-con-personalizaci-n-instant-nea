document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("color");
    const patternSelect = document.getElementById("pattern");
    const textInput = document.getElementById("text");
    const updateButton = document.getElementById("updateProductBtn");
    const productImage = document.getElementById("productImage");
    const orderButton = document.getElementById("orderButton");

    updateButton.addEventListener("click", updateProductPreview);

    function updateProductPreview() {
        const selectedColor = colorPicker.value;
        const selectedPattern = patternSelect.value;
        const customText = textInput.value.trim();

        // Aplicar color de fondo
        productImage.style.backgroundColor = selectedColor;

        // Aplicar patrón (si hay uno seleccionado)
        if (selectedPattern !== "none") {
            productImage.style.backgroundImage = getPatternImage(selectedPattern);
            productImage.style.backgroundSize = "cover";
        } else {
            productImage.style.backgroundImage = "none";
        }

        // Agregar texto personalizado si se proporciona
        if (customText) {
            productImage.setAttribute("alt", customText);
        } else {
            productImage.setAttribute("alt", "Producto Personalizado");
        }

        // Habilitar botón de compra
        orderButton.disabled = false;
    }

    function getPatternImage(pattern) {
        switch (pattern) {
            case "dots":
                return "url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')";
            case "stripes":
                return "url('https://www.toptal.com/designers/subtlepatterns/patterns/stripes.png')";
            case "floral":
                return "url('https://www.toptal.com/designers/subtlepatterns/patterns/floral.png')";
            default:
                return "none";
        }
    }

    orderButton.addEventListener("click", function () {
        alert("¡Gracias por tu pedido! El producto ha sido agregado a tu carrito.");
    });
});
