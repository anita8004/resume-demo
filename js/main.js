document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".nav-hamburger");
  const nav = document.querySelector(".web-nav");
  hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
    } else {
      hamburger.classList.add("active");
    }
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    } else {
      nav.classList.add("show");
    }
  })
});