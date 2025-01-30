import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";

loadHomePage();

function clearPage() {
    document.querySelector("#content").innerHTML = "";
}

document.querySelector("#home").addEventListener("click", () => {
    clearPage();
    loadHomePage();
});
document.querySelector("#menu").addEventListener("click", () => {
    clearPage();
    loadMenuPage();
});