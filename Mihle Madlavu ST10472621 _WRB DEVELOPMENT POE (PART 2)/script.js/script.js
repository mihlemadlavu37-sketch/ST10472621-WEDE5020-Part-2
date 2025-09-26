// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
