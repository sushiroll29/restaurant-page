(()=>{"use strict";const e=()=>{const e=document.querySelector("#content");if(!document.getElementById("homeFeed")){const t=document.createElement("div");t.id="homeFeed",e.appendChild(t);const n=document.createElement("h1");n.textContent="Cartoon Restaurant";const o=document.createElement("img");o.src="./assets/naruto.jpeg";const c=document.createElement("p");c.textContent="Naruto R = Best R";const a=document.createElement("img");a.src="./assets/turkey.jpeg";const d=document.createElement("p");return d.textContent="Tom&Jerry Turkey",t.append(n,o,c,a,d),t}},t=document.querySelector("#content"),n=document.createElement("button");n.textContent="Home",n.classList.add("page");const o=document.createElement("button");o.textContent="Menu",o.classList.add("page");const c=document.createElement("button");c.textContent="Contact",c.classList.add("page"),t.append(n,o,c),e();let a="home";document.querySelectorAll(".page").forEach((t=>t.addEventListener("click",(()=>{switch(a=t.textContent.toLowerCase(),console.log(a),a){case"home":e();break;case"menu":(()=>{const e=document.querySelector("#content");if(!document.getElementById("menuFeed")){const n=document.createElement("div");n.id="menuFeed",e.appendChild(n);const o=document.createElement("h1");return o.textContent="Menu",n.append(o),n.appendChild(t("breakfast1","Mulan Porridge")),n.appendChild(t("breakfast2","Scooby-Doo Giant Sandwich")),n}function t(e,t){const n=document.createElement("div"),o=document.createElement("img");o.src=`./assets/${e.toLowerCase()}.jpeg`,o.alt=`${e}`;const c=document.createElement("p");return c.textContent=t,n.appendChild(o),n.appendChild(c),n}})();break;case"contact":(()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="Contact",e.append(t)})()}}))))})();