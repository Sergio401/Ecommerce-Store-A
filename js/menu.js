const $menuHamburger = document.getElementById("menu-hamburger")
const $menu = document.querySelector('.Header__menu-container')

$menuHamburger.addEventListener("click", () => {
  $menu.classList.toggle('active')
})