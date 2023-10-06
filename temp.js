import { filterButton } from "./app (4).js";

export function temp(data) {
  data.forEach((data) => {
    const div = document.createElement("div");

    div.innerHTML = `<div class="card">
        <div class="title">Title:${data.title}</div>
        <div class="category">${
          data.category === undefined ? "" : `Category:${data.category}`
        }</div>
        <div class="price">${
          data.price === undefined ? "" : `Price:${data.price}`
        }</div>
            <div class="rating"> ${
              data.rating === undefined ? "" : `Rating:${data.rating.rate}`
            }</div>
        </div>`;

    display.appendChild(div);
  });
}

export function templateButton(buttons) {
  buttons.forEach((button) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = `${button.contact}`;
    buttonDisplay.appendChild(buttonElement);
    buttonElement.addEventListener("click", () => filterButton(button.value));
  });
}
