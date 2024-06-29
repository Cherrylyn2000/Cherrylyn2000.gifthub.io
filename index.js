document.addEventListener("DOMContentLoaded", function() {
    const productsLeft = document.querySelectorAll(".col-4:nth-child(3n-2)");

    productsLeft.forEach(product => {
        const price = product.querySelector("label[id^='price']").innerText;
        const quantityInput = product.querySelector("input[type='number']");

        quantityInput.addEventListener("input", function() {
            updateTotal();
        });
    });

    function updateTotal() {
        const products = document.querySelectorAll(".col-4:nth-child(3n-2)");
        let total = 0;

        products.forEach(product => {
            const price = parseFloat(product.querySelector("label[id^='price']").innerText);
            const quantity = parseInt(product.querySelector("input[type='number']").value);

            total += price * quantity;
        });

        document.getElementById("total").value = total.toFixed(2);
    }
});
                         
