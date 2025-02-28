// Simple JavaScript for demonstration purposes
document.addEventListener("DOMContentLoaded", function () {
  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".product-card .btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Product added to cart!");
    });
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      this.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Category card hover effect
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});
