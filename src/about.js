const loadAboutPage = function() {
    const contentDiv = document.querySelector("#content");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-div")

    const pageHeader = document.createElement("h1");
    pageHeader.classList.add("about-header");
    pageHeader.innerHTML = "About <strong>Savory Bliss<strong>";

    const pageBody = document.createElement("p");
    pageBody.classList.add("about-body");
    pageBody.innerHTML = "Nestled in the heart of Montreal, Savory Bliss is a family-owned restaurant dedicated to serving wholesome meals. Our journey began with a passion for cooking and a dream to create a space where friends and families could come together over great food. At Savory Bliss, we use only the freshest ingredients, combining traditional recipes with a modern twist."

    aboutDiv.append(pageHeader, pageBody);
    
    contentDiv.append(aboutDiv);
};

export { loadAboutPage }