import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

loadHomePage();

function clearPage() {
    document.querySelector("#content").innerHTML = "";
}

function updateHeaderHighlight(buttonID) {
    document.querySelectorAll(".nav-button").forEach(btn => {
        btn.style.color = "rgb(245, 224, 181)";
        btn.style.backgroundColor = "rgb(46, 43, 43)";
    });
    document.querySelector(buttonID).style.backgroundColor = "rgb(245, 224, 181)";
    document.querySelector(buttonID).style.color = "rgb(46, 43, 43)";
}

document.querySelector("#home").addEventListener("click", () => {
    clearPage();
    loadHomePage();
    updateHeaderHighlight("#home");
});
document.querySelector("#menu").addEventListener("click", () => {
    clearPage();
    loadMenuPage();
    updateHeaderHighlight("#menu")
});
document.querySelector("#about").addEventListener("click", () => {
    clearPage();
    loadAboutPage();
    updateHeaderHighlight("#about")
});