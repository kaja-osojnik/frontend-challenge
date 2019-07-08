var newimg = document.createElement("img");
newimg.setAttribute("src", "https://i.ibb.co/ns6Bh0S/hamburger.png");
newimg.setAttribute("id", "hamburger");

document.getElementsByTagName("header")[0].appendChild(newimg);

// toggle

var hamb = document.getElementById("hamburger");
var nav = document.querySelector(".region-header ul.menu");
