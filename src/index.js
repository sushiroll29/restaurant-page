import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

// homePage();
const container = document.querySelector('#content');
container.appendChild(createHeader());
container.appendChild(createMain());

homePage();
let choice = 'home';

const pages = document.querySelectorAll('.page');
// console.log(pages);
pages.forEach(page => page.addEventListener('click', () => {
    choice = page.textContent.toLowerCase();
    console.log(choice);
    switch(choice) {
        case 'home':
            homePage();
            break;
        case 'menu':
            menuPage();
            break;
        case 'contact' :
            contactPage();
            break;
    
    }
}))

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.id = "header";

    const homeBtn = document.createElement('button');
homeBtn.textContent = "Home";
homeBtn.classList.add('page');
header.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = "Menu";
menuBtn.classList.add('page');
header.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.textContent = "Contact";
contactBtn.classList.add('page');
header.appendChild(contactBtn);

return header;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.id = "main";
    return main;
  }

// menuBtn.addEventListener("click", () => {
//     // console.log(homePage.homeContainer);
//     switch(choice) {
//         case 'home': 
//             homePage();
//             break;
//         case 'menu':
//             menuPage();
//             break;
//         case 'contact' :
//             contactPage();
//             break;
//     }
// });


// homePage();
// menuPage();
// contactPage();