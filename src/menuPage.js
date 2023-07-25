function createMenu() {
  const main = document.querySelector("#main");

  if (!document.getElementById("menuFeed")) {
    const menuContainer = document.createElement("div");
    menuContainer.id = "menuFeed";

    main.appendChild(menuContainer);

    //BREAKFAST

    const breakfast = document.createElement("h2");
    breakfast.textContent = "Breakfast";
    menuContainer.appendChild(breakfast);

    const breakfastContainer = document.createElement("div");
    breakfastContainer.classList.add("menuSection");
    menuContainer.appendChild(breakfastContainer);

    breakfastContainer.appendChild(
      createMenuItem("breakfast1", "Mushu's Porridge")
    );
    breakfastContainer.appendChild(
      createMenuItem("breakfast2", "Shaggy's Giant Sandwich")
    );
    breakfastContainer.appendChild(
      createMenuItem("breakfast3", "Remy's Omelette")
    );
    breakfastContainer.appendChild(
      createMenuItem("breakfast4", "Howl's Bacon&Eggs")
    );

    //MAIN COURSES

    const mainCourses = document.createElement("h2");
    mainCourses.textContent = "Main Courses";
    menuContainer.appendChild(mainCourses);

    const mainCoursesContainer = document.createElement("div");
    mainCoursesContainer.classList.add("menuSection");
    menuContainer.appendChild(mainCoursesContainer);

    mainCoursesContainer.appendChild(
      createMenuItem("naruto", "Ichiraku's Ramen")
    );
    mainCoursesContainer.appendChild(
      createMenuItem("turkey", "Tom's Roasted Turkey")
    );
    mainCoursesContainer.appendChild(createMenuItem("nacoo", "Ron's Naco"));
    mainCoursesContainer.appendChild(
      createMenuItem("bobburger", "Bob's Burger of the Day")
    );

    //DESSERTS

    const desserts = document.createElement("h2");
    desserts.textContent = "Desserts";
    menuContainer.appendChild(desserts);

    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("menuSection");
    menuContainer.appendChild(dessertsContainer);

    dessertsContainer.appendChild(createMenuItem("donut", "Homer's Donuts"));
    dessertsContainer.appendChild(
      createMenuItem("cake", "Sleeping Beauty's Cake")
    );
    dessertsContainer.appendChild(
      createMenuItem("jawbreaker", "Ed, Edd & Eddy's Jawbreaker")
    );
    dessertsContainer.appendChild(
      createMenuItem("cakepizza", "Soos's Cake-Flavoured Pizza")
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
