const menu = document.getElementById("menu-icon");
const links = document.getElementById("links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");
});