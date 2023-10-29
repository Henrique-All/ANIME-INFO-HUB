const listMobile = document.querySelector(".mobile-sections");
const btnOpen = document.getElementById("menu");
const Icons = document.querySelector(".icon");
const nav = document.querySelector(".mobile-nav");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  listMobile.classList.toggle("active");
  Icons.classList.toggle("active");
  nav.classList.toggle("active");
}

btnOpen.addEventListener("click", toggleMenu);
btnOpen.addEventListener("touchstart", toggleMenu);
Icons.addEventListener("click", toggleMenu);
Icons.addEventListener("touchstart", toggleMenu);
