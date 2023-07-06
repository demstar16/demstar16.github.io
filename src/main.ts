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

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHTML = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `<div class="carousel-nav"> ${ buttonsHTML.join("") } </div>`);

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

function viewDemo(elementId: string) {
  const element = document.getElementById(elementId);
  if(element) {
    if (element.style.display == 'none') {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }
}

function quoteGenerator() {
  const element = document.getElementById("quote");
  let randomIndex = Math.floor(Math.random() * quotes.length);
  if(element) {
    element.innerHTML = quotes[randomIndex];
  }
}

function iconReveal(elementId: string) {
  const div = document.getElementById(elementId);
  if (div) {
    if (div.style.display == "none"){
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
}

