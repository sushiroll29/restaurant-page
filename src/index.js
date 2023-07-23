import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

// homePage();
const container = document.querySelector('#content');

const homeBtn = document.createElement('button');
homeBtn.textContent = "Home";
homeBtn.classList.add('page');

const menuBtn = document.createElement('button');
menuBtn.textContent = "Menu";
menuBtn.classList.add('page');

const contactBtn = document.createElement('button');
contactBtn.textContent = "Contact";
contactBtn.classList.add('page');

container.append(homeBtn, menuBtn, contactBtn);

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