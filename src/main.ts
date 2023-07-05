// To Compile: npx tsc

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

function quoteReveal(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    if (element.style.display == "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  } else {
    console.error("Element with ID ${elementID} not found");
  }
}

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

