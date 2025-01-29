import img1 from "./img1.jpg";
import "./home.css";

const loadHomePage = function() {
    const contentDiv = document.querySelector("#content");

    const img = document.createElement("img");
    const textContainer = document.createElement("div");
    const welcomeText = document.createElement("h1");
    const homeParagraph = document.createElement("p");

    textContainer.classList.add("text-container");

    img.src = img1;

    welcomeText.innerHTML = "Welcome to Savory Bliss – Where Every Bite Feels Like Home";

    homeParagraph.innerHTML = "Discover the joy of delicious, freshly-prepared meals crafted with love. Whether you're here for a casual lunch or a cozy dinner, we promise a memorable dining experience.";

    textContainer.append(welcomeText, homeParagraph);

    contentDiv.append(img, textContainer);
};

export { loadHomePage };