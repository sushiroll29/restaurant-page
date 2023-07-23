function createHome() {
  const main = document.querySelector("#main");

  if (!document.getElementById("homeFeed")) {
    const homeContainer = document.createElement("div");
    homeContainer.id = "homeFeed";

    main.appendChild(homeContainer);

    return homeContainer;
  }
}

function homePage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export { homePage };
