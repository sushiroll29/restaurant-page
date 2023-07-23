function createMenu() {
  const main = document.querySelector("#main");

  if (!document.getElementById("menuFeed")) {
    const menuContainer = document.createElement("div");
    menuContainer.id = "menuFeed";

    main.appendChild(menuContainer);

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    menuContainer.appendChild(menuTitle);

    //BREAKFAST

    const breakfast = document.createElement("h2");
    breakfast.textContent = "Breakfast";
    menuContainer.appendChild(breakfast);

    menuContainer.appendChild(createMenuItem("breakfast1", "Mushu's Porridge"));
    menuContainer.appendChild(
      createMenuItem("breakfast2", "Shaggy's Giant Sandwich")
    );
    menuContainer.appendChild(createMenuItem("breakfast3", "Remi's Omelette"));
    menuContainer.appendChild(
      createMenuItem("breakfast4", "Howl's Bacon&Eggs")
    );

    //MAIN COURSES

    const mainCourses = document.createElement("h2");
    mainCourses.textContent = "Main Courses";
    menuContainer.appendChild(mainCourses);

    menuContainer.appendChild(createMenuItem("naruto", "Ichiraku's Ramen"));
    menuContainer.appendChild(createMenuItem("turkey", "Tom's Roasted Turkey"));

    //DESSERTS

    const desserts = document.createElement("h2");
    desserts.textContent = "Desserts";
    menuContainer.appendChild(desserts);

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
