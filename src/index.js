import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

const container = document.querySelector("#content");
container.appendChild(createHeader());
container.appendChild(createMain());
container.appendChild(createFooter());

homePage();

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.id = "header";

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "Cartoon Restaurant";

  header.appendChild(restaurantName);

  const pageContainer = document.createElement("div");
  pageContainer.id = "pageContainer";
  header.appendChild(pageContainer);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("page");
  homeBtn.classList.add("active");
  homeBtn.addEventListener("click", (e) => {
    setActivePage(homeBtn);
    homePage();
  });
  pageContainer.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("page");
  menuBtn.addEventListener("click", (e) => {
    setActivePage(menuBtn);
    menuPage();
  });
  pageContainer.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("page");
  contactBtn.addEventListener("click", (e) => {
    setActivePage(contactBtn);
    contactPage();
  });
  pageContainer.appendChild(contactBtn);

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.id = "main";
  return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.id = "footer";

    const footerText = document.createElement("h3");
    footerText.textContent = "footer";
    footer.appendChild(footerText);

    return footer;
}

function setActivePage(page) {
    document.querySelector(".active").classList.remove("active"); //removes the 'active' class for the previously active page
    page.classList.add("active"); //sets the new page as active
  }