(()=>{"use strict";function e(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.querySelector("#main");if(!document.getElementById("homeFeed")){const t=document.createElement("div");return t.id="homeFeed",e.appendChild(t),t}}())}const t=document.querySelector("#content");function n(e){document.querySelector(".active").classList.remove("active"),e.classList.add("active")}t.appendChild(function(){const t=document.createElement("header");t.classList.add("header"),t.id="header";const d=document.createElement("h1");d.textContent="Cartoon Restaurant",t.appendChild(d);const c=document.createElement("div");c.id="pageContainer",t.appendChild(c);const a=document.createElement("button");a.textContent="Home",a.classList.add("page"),a.classList.add("active"),a.addEventListener("click",(t=>{n(a),e()})),c.appendChild(a);const o=document.createElement("button");o.textContent="Menu",o.classList.add("page"),o.addEventListener("click",(e=>{n(o),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.querySelector("#main");if(!document.getElementById("menuFeed")){const n=document.createElement("div");n.id="menuFeed",e.appendChild(n);const d=document.createElement("h1");d.textContent="Menu",n.appendChild(d);const c=document.createElement("h2");c.textContent="Breakfast",n.appendChild(c),n.appendChild(t("breakfast1","Mushu's Porridge")),n.appendChild(t("breakfast2","Shaggy's Giant Sandwich")),n.appendChild(t("breakfast3","Remi's Omelette")),n.appendChild(t("breakfast4","Howl's Bacon&Eggs"));const a=document.createElement("h2");a.textContent="Main Courses",n.appendChild(a),n.appendChild(t("naruto","Ichiraku's Ramen")),n.appendChild(t("turkey","Tom's Roasted Turkey"));const o=document.createElement("h2");return o.textContent="Desserts",n.appendChild(o),n}function t(e,t){const n=document.createElement("div"),d=document.createElement("img");d.src=`./assets/${e.toLowerCase()}.jpeg`,d.alt=`${e}`;const c=document.createElement("p");return c.textContent=t,n.appendChild(d),n.appendChild(c),n}}())}()})),c.appendChild(o);const i=document.createElement("button");return i.textContent="Contact",i.classList.add("page"),i.addEventListener("click",(e=>{n(i),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.querySelector("#main");if(!document.getElementById("contactFeed")){const t=document.createElement("div");t.id="contactFeed";const n=document.createElement("h1");return n.textContent="Contact",e.append(n),t}}())}()})),c.appendChild(i),t}()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.id="main",e}()),e()})();