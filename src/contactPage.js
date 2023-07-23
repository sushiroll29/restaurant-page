function createContact() {
  const main = document.querySelector("#main");

  if (!document.getElementById("contactFeed")) {
    const contactContainer = document.createElement("div");
    contactContainer.id = "contactFeed";

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact";

    main.append(contactTitle);

    return container;
  }
}

function contactPage() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export { contactPage };
