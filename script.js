// Scroll fade-in for footer
window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    footer.classList.add("fade-in-visible");
    footer.style.opacity = 1;
  }
});
