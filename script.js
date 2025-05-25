document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    document.getElementById("Thank you for your order.We've recieved your order and will start preparing it shortly.").style.display = "block"; // Show confirmation message

    // Optionally, clear the form
    this.reset();
});

