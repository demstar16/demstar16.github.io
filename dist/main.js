"use strict";
// To Compile: npx tsc
let quotes = [
    "You can't force a flower to grow, but you can water it every day",
    "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "No one can make you feel inferior without your consent.",
    "Not all those who wander are lost.",
    "Opportunities don't happen, you create them.",
    "Whatever you are, be a good one.",
    "Be the change that you wish to see in the world.",
    "The only time you fail is when you fall down and stay down.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "Never let the fear of striking out keep you from playing the game.",
    "One day at a time."
];
let languages = [
    ["../images/python.png", "Python"],
    ["../images/css.png", "CSS"],
    ["../images/html.png", "HTML"],
    ["../images/js.png", "JavaScript"],
    ["../images/ts.png", "TypeScript"],
    ["../images/c.png", "C"],
    ["../images/java.png", "Java"],
    ["../images/git.png", "Git"]
];
let frameworks = [
    ["../images/django.png", "Django"],
    ["../images/flask.png", "Flask"],
    ["../images/nodejs.png", "NodeJS"],
    ["../images/electron.png", "ElectronJS"]
];
let software = [
    ["../images/myob.png", "MYOB"],
    ["../images/excel.png", "Microsoft Excel"],
    ["../images/githubdesktop.png", "GitHub Desktop"],
    ["../images/docker.png", "Docker"],
];
let os = [
    ["../images/windows.png", "Windows"],
    ["../images/mac.png", "Macintosh"],
    ["../images/linux.png", "Linux"]
];
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHTML = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend", `<div class="carousel-nav"> ${buttonsHTML.join("")} </div>`);
    const buttons = carousel.querySelectorAll(".carousel-button");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all the items
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-button-selected"));
            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-button-selected");
        });
    });
    // selecting first item on page load
    items[0].classList.add("carousel-item-selected");
    buttons[0].classList.add("carousel-button-selected");
});
function viewDemo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        if (element.style.display == 'none') {
            element.style.display = "flex";
        }
        else {
            element.style.display = "none";
        }
    }
}
function quoteGenerator() {
    const element = document.getElementById("quote");
    let randomIndex = Math.floor(Math.random() * quotes.length);
    if (element) {
        element.innerHTML = quotes[randomIndex];
    }
}
function iconReveal(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        if (elementId == "languages") {
            for (let i = 0; i < languages.length; i++) {
                let icon = document.createElement("img");
                icon.setAttribute("src", languages[i][0]);
                icon.setAttribute("alt", languages[i][1]);
                element.appendChild(icon);
            }
        }
        else if (elementId == "frameworks") {
            for (let i = 0; i < frameworks.length; i++) {
                let icon = document.createElement("img");
                icon.setAttribute("src", frameworks[i][0]);
                icon.setAttribute("alt", frameworks[i][1]);
                element.appendChild(icon);
            }
        }
        else if (elementId == "software") {
            for (let i = 0; i < software.length; i++) {
                let icon = document.createElement("img");
                icon.setAttribute("src", software[i][0]);
                icon.setAttribute("alt", software[i][1]);
                element.appendChild(icon);
            }
        }
        else if (elementId == "os") {
            for (let i = 0; i < os.length; i++) {
                let icon = document.createElement("img");
                icon.setAttribute("src", os[i][0]);
                icon.setAttribute("alt", os[i][1]);
                element.appendChild(icon);
            }
        }
    }
}
