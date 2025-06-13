// entryAnimation.js

// Wait for the entire DOM to be loaded
window.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  animatedElements.forEach((el) => {
    // Apply animation styles dynamically if needed
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.animation = "fadeInUp 1s ease forwards";
    el.style.animationPlayState = "running";

    // Optional: Set specific delay for types of elements
    if (el.classList.contains("navbar")) {
      el.style.transform = "translateY(-30px)";
      el.style.animationDelay = "0.2s";
    } else if (el.classList.contains("hero-img")) {
      el.style.transform = "scale(0.9)";
      el.style.animation = "zoomIn 1s ease forwards";
      el.style.animationDelay = "0.7s";
    }
  });
});
