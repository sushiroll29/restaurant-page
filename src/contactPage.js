const contactPage = () => {
    const container = document.querySelector('#content');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact";

    container.append(contactTitle);

    return container;
}

export { contactPage };