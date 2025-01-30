// script.js
function showAlert() {
  alert("Hello dari file JS eksternal!");
}

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika home & menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar diluar sidebar untuk menghilahkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});
