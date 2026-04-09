"use strict";

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js is connected and running!");
});

const lightRadio = document.getElementById("light");
const darkRadio = document.getElementById("dark");

lightRadio.addEventListener("change", function() {
    if(this.checked) {
        document.body.classList.add("body-light");
        document.querySelector(".website-nav").classList.add("website-nav-light");
        document.getElementById("star").src = "img/star_dark.svg";

        localStorage.setItem("theme", "light");
    }
})

darkRadio.addEventListener("change", function() {
    if(this.checked) {
        document.body.classList.remove("body-light");
        document.querySelector(".website-nav").classList.remove("website-nav-light");
        document.getElementById("star").src = "img/star.svg";

        localStorage.setItem("theme", "dark");
    }
})

window.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    const navbar = document.querySelector(".website-nav");

    if(savedTheme === "light") {
        document.body.classList.add("body-light");
        navbar.classList.add("website-nav-light");

        const star = document.getElementById("star");
        if(star) {
            star.src = "img/star_dark.svg";
        }
        
        document.getElementById("light").checked = true;
    }
    else {
        document.body.classList.remove("body-light");
        navbar.classList.remove("website-nav-light");

        const star = document.getElementById("star");
        if(star) {
            star.src = "img/star.svg";
        }
        
        document.getElementById("dark").checked = true;
    }
})

// resources: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
// https://www.w3schools.com/jsref/prop_radio_checked.asp