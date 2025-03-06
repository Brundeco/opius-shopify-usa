document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const notification = document.getElementById("cart-notification");
  const closeCart = document.getElementById("close-cart");
  const cartCountElement = document.getElementById("cart-count");

  function showNotification() {
    notification.classList.remove("notification-hidden");
    notification.classList.add("notification-show");
  }

  function closeNotification() {
    notification.classList.remove("notification-show");
    notification.classList.add("notification-hidden");
  }

  // Add the click event listener for the close button
  closeCart.addEventListener("click", closeNotification);

  function updateCartCount() {
    fetch("/cart.js")
      .then((response) => response.json())
      .then((data) => {
        cartCountElement.textContent = data.item_count;
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const form = button.closest("form");
      const formData = new FormData(form);

      fetch("/cart/add.js", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok");
        })
        .then((data) => {
          console.log("Item added to cart:", data);
          showNotification();
          updateCartCount(); // Update cart count dynamically
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
});
