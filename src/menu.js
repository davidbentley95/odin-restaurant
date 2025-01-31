const loadMenuPage = function() {
    const contentDiv = document.querySelector("#content");
    
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    const pageHeader = document.createElement("h1");
    pageHeader.innerHTML = "Our Menu";

    const header1 = document.createElement("h2");
    header1.innerHTML = "Appetizers";

    const header2 = document.createElement("h2");
    header2.innerHTML = "Mains";
    
    const header3 = document.createElement("h2");
    header3.innerHTML = "Desserts";

    const item1 = document.createElement("p");
    item1.innerHTML = "Crispy Spring Rolls - $5";

    const item2 = document.createElement("p");
    item2.innerHTML = "Garlic Butter Shrimp - $8";

    const item3 = document.createElement("p");
    item3.innerHTML = "Grilled Herb Chicken - $15";

    const item4 = document.createElement("p");
    item4.innerHTML = "Classic Spaghetti Bolognese - $12";

    const item5 = document.createElement("p");
    item5.innerHTML = "Chocolate Lava Cake - $6";

    const item6 = document.createElement("p");
    item6.innerHTML = "Vanilla Bean Cheesecake - $7";

    menuDiv.append(
        pageHeader,
        header1,
        item1,
        item2,
        header2,
        item3,
        item4,
        header3,
        item5, 
        item6
    )
    contentDiv.append(menuDiv);
};

export { loadMenuPage }