const overlay = document.querySelector(".image-grid__item--overlay");

overlay.addEventListener("click", () => {
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
});
