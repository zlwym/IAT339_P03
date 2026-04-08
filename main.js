"use strict";

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js is connected and running!");
});

const lightRadio = document.getElementById("light");
const darkRadio = document.getElementById("dark");
darkRadio.checked = true;

lightRadio.addEventListener("change", function() {
    if (this.checked) {
        var element = document.body;
        var navbar = document.querySelector(".website-nav");
        
        element.classList.toggle("body-light");
        navbar.classList.toggle("website-nav-light");

        darkRadio.checked = false;
    }
})

darkRadio.addEventListener("change", function() {
    if (this.checked) {
        var element = document.body;
        var navbar = document.querySelector(".website-nav");

        element.classList.toggle("body-light");
        navbar.classList.toggle("website-nav-light");

        darkRadio.checked = true;
    }
})