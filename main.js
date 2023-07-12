const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  aside.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
}
