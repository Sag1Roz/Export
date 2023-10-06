import { temp, templateButton } from "./temp.js";
import { data } from "./data.js";

let filterProduct = [...data];
const display = document.querySelector("#display");
const buttons = [
  { contact: "All", value: null },
  { contact: "With category", value: "category" },
  { contact: "With price", value: "price" },
  { contact: "With rating", value: "rating" },
];

temp(filterProduct);
templateButton(buttons);
console.log(
  filterProduct.forEach((product) => {
    product["price"];
  })
);

export function filterButton(value) {
  display.innerHTML = "";
  if (value === null) {
    filterProduct = data;
    temp(filterProduct);
    return;
  }
  filterProduct = data;
  filterProduct.filter((product) => {
    return product[value] !== undefined;
  });
  console.log(filterProduct[value]);
  temp(filterProduct);
}
