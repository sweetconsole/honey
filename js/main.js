function burgerMenu(button) {
   button.classList.toggle("burger-active");
   document.getElementById("menu").classList.toggle("menu-active");
   document.getElementById("body").classList.toggle("menu-active-body");
}