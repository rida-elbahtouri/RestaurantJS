!function(e){var n={};function t(a){if(n[a])return n[a].exports;var c=n[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(a,c,function(n){return e[n]}.bind(null,c));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const a=[{name:"Pizza",img:"assets/images/pizza.jpg",desc:"our pizza is the best in the city"},{name:"Soup",img:"assets/images/soup.jpg",desc:"our soup is the best in the city"},{name:"Salad",img:"assets/images/salad.jpg",desc:"our salad is the best in the city"},{name:"Chekin",img:"assets/images/chekin.jpg",desc:"our chekin is the best in the city"}],c=()=>{const e=document.createElement("div");e.className="foodlist",e.id="foodlist";const n=document.createElement("h1");return n.className="foodlist_title",n.innerHTML="our list of today :",n.id="foodlist_title",e.appendChild(n),a.forEach(n=>{e.appendChild((e=>{const n=document.createElement("div");n.className="card",n.id="menucards";const t=document.createElement("img");t.src=e.img,t.className="foodimg",n.appendChild(t);const a=document.createElement("h3");a.innerHTML=e.name,a.className="foodname",n.appendChild(a);const c=document.createElement("p");return c.innerHTML=e.desc,c.className="fooddesc",n.appendChild(c),n})(n))}),e},o=()=>{const e=document.createElement("h1");return e.className="title",e.innerHTML="Hello and welcome to my restaurant",e.id="title",e},i=document.getElementById("content"),s=(()=>{const e=document.createElement("nav");e.className="navbar",e.id="navbar";const n=document.createElement("img");n.className="logo",n.src="assets/images/logo.png",n.id="logo",e.appendChild(n);const t=document.createElement("ul");t.className="nav_links",e.appendChild(t);const a=document.createElement("li");a.className="link",a.innerHTML="Home",a.id="home",t.appendChild(a);const c=document.createElement("li");c.className="link",c.innerHTML="Menu",c.id="menu",t.appendChild(c);const o=document.createElement("li");return o.className="link",o.innerHTML="Contact",o.id="contact",t.appendChild(o),e})();i.appendChild(s);const l=document.querySelectorAll(".link"),r=document.createElement("div");r.className="page",r.id="page",r.appendChild(o()),i.appendChild(r);const d=e=>"contact"===e?(r.className="page",(()=>{const e=document.createElement("div");e.className="conatctinfo",e.id="conatctinfo";const n=document.createElement("h2");n.className="email",n.innerHTML="email : example@gmail.com",e.appendChild(n);const t=document.createElement("h2");t.className="phonenumber",t.innerHTML="Phone Number : +2126666666",e.appendChild(t);const a=document.createElement("h2");return a.className="location",a.innerHTML="Location : Morocco Fez",e.appendChild(a),e})()):"home"===e?(r.className="page",o()):"menu"===e?(r.className="menupage",c()):void 0;l.forEach(e=>{e.addEventListener("click",(n,t=e.id)=>{let a=d(t);r.innerHTML="",r.appendChild(a)})})}]);