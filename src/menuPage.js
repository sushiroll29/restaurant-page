function createMenu() {
  const main = document.querySelector("#main");

  if (!document.getElementById("menuFeed")) {
    const menuContainer = document.createElement("div");
    menuContainer.id = "menuFeed";

    main.appendChild(menuContainer);

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    menuContainer.append(menuTitle);

    menuContainer.appendChild(createMenuItem("breakfast1", "Mushu's Porridge"));
    menuContainer.appendChild(
      createMenuItem("breakfast2", "Scooby-Doo's Giant Sandwich")
    );
    menuContainer.appendChild(createMenuItem("breakfast3", "Remi's Omelette"));
    menuContainer.appendChild(
      createMenuItem("breakfast4", "Howl's Bacon&Eggs")
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
}

function menuPage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export { menuPage };
