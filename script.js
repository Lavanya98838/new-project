document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
  
        // Retrieve existing cart items from localStorage or initialize an empty array
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
        // Add the clicked item to the cart
        cartItems.push({ name: name, price: price });
  
        // Store the updated cart items back into localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
        // Optional: Display a confirmation message or update the UI to indicate the item was added to the cart
        console.log("Added", name, "to cart");
      });
    });
  });