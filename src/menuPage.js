function createMenu() {
  const container = document.querySelector("#content");

  if (!document.getElementById("menuFeed")) {
    const menuContainer = document.createElement("div");
    menuContainer.id = "menuFeed";

    container.appendChild(menuContainer);

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    menuContainer.append(menuTitle);

    menuContainer.appendChild(
      createMenuItem("breakfast1", "Mulan Porridge"));
    menuContainer.appendChild(
      createMenuItem("breakfast2", "Scooby-Doo Giant Sandwich")
    );

    return menuContainer;
  }

  function createMenuItem(title, description) {
    const menuItem = document.createElement("div");

    const menuItemImage = document.createElement("img");
    menuItemImage.src = `./assets/${title.toLowerCase()}.jpeg`;
    menuItemImage.alt = `${title}`;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = description;

    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
  }
};

function menuPage() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export { menuPage };
