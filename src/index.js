import { loadHomePage } from "./home/home.js";

loadHomePage();

document.querySelector("#home").addEventListener("click", loadHomePage);