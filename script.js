document.addEventListener("DOMContentLoaded", function() {
    const orderForm= document.getElementById("orderForm");

    order.addEventListener("submit order", function(event) {
        event.preventDefault(); // Prevent page refresh

        // Redirect to the confirmation page after submitting the order
        window.location.href = "confirmation.html";
    });
});

