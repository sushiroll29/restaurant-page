const initialPage = () => {
    const container = document.querySelector('#content');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Cartoon Restaurant";

    const food1 = document.createElement("img");
    food1.src = "./naruto.jpeg";

    const food1Description = document.createElement("p");
    food1Description.textContent = "Naruto R = Best R"

    container.appendChild(restaurantName);
    container.appendChild(food1);
    container.appendChild(food1Description);

    return container;
}

export { initialPage };