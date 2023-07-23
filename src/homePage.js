const homePage = () => {
  const container = document.querySelector("#content");
  // const x = ;

  if (!document.getElementById("homeFeed")) {
    const homeContainer = document.createElement("div");
    homeContainer.id = "homeFeed";

    container.appendChild(homeContainer);

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Cartoon Restaurant";

    const food1 = document.createElement("img");
    food1.src = "./assets/naruto.jpeg";

    const food1Description = document.createElement("p");
    food1Description.textContent = "Naruto R = Best R";

    const food2 = document.createElement("img");
    food2.src = "./assets/turkey.jpeg";

    const food2Description = document.createElement("p");
    food2Description.textContent = "Tom&Jerry Turkey";

    homeContainer.append(
      restaurantName,
      food1,
      food1Description,
      food2,
      food2Description
    );
    // container.appendChild(food1);
    // container.appendChild(food1Description);

    return homeContainer;
  }
};

export { homePage };
