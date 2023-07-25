function createHome() {
  const main = document.querySelector("#main");

  if (!document.getElementById("homeFeed")) {
    const homeFeed = document.createElement("div");
    homeFeed.id = "homeFeed";

    main.appendChild(homeFeed);

    homeFeed.appendChild(
      addText(
        "Ever wondered what the food from your favourite cartoon tastes like?"
      )
    );

    const restaurantPicture = document.createElement("img");
    restaurantPicture.src = "./assets/homePageImage.jpeg";
    restaurantPicture.alt = "home page image";
    homeFeed.appendChild(restaurantPicture);

    homeFeed.appendChild(addText("You can now try it at The Cartoon Diner!"));
    homeFeed.appendChild(
      addText("We offer a variety of dishes from all over the cartoon world.")
    );
    homeFeed.appendChild(
      addText("Check out our menu and make a reservation today!")
    );

    return homeFeed;
  }
}

function addText(text) {
  const textToAdd = document.createElement("p");
  textToAdd.textContent = text;
  return textToAdd;
}

function homePage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}
export { homePage };
