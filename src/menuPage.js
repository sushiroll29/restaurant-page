const menuPage = () => {
    const container = document.querySelector('#content');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Menu";

    const breakfast1 = document.createElement("img");
    breakfast1.src = "./assets/breakfast1.jpeg";

    const breakfast1Description = document.createElement("p");
    breakfast1Description.textContent = "Naruto R = Best R"

    const breakfast2 = document.createElement("img");
    breakfast2.src = "./assets/breakfast2.jpeg";

    const breakfast2Description = document.createElement("p");
    breakfast2Description.textContent = "Tom&Jerry Turkey"

    container.append(menuTitle, breakfast1, breakfast1Description, breakfast2, breakfast2Description);
    // container.appendChild(food1);
    // container.appendChild(food1Description);

    return container;
}

export { menuPage };