let myLinks = document.querySelector(".my-links");
let menu = document.querySelector(".fa-bars");
let mainMenu = document.getElementById("main-menu");

menu.addEventListener("click", function () {
  myLinks.classList.toggle("my-links");
  mainMenu.style.backgroundColor = "rgb(235, 0, 139)";
  myLinks.style.color = "white";
});
