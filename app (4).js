/**
 * Welcome to your advanced JavaScript tasks.
 * You will need to face several tasks from easy
 * to hard.
 *
 * For each task you complete, make sure to commit
 * it and push it to the git repository. In the
 * end I want to see one repository with one commit
 * for each task you've completed. Remember you can
 * send me the code in case you're having some problems.
 *
 * Feel free to style however you want.
 */

/**
 * Task I - difficulty 3/10
 *
 * Open up a new project and get the basic css and js
 * setup. Take the data.js and add it to the project.
 *
 * 1. Get the data into your js file using import.
 *
 * 2. Open up a new file called templates.js which
 * you're gonna export some functions in the future.
 *
 * 3. Explore the data a bit, and display it to
 * the html like you know. However, some of the objects
 * missing some properties so make sure you display
 * them as intended without errors.
 *
 * FUNCTION create a function called "getProductTemplate"
 * in your templates.js and export it to the main file. This
 * function will return the template for the product html.
 * I want to see some destructuring in that function. You
 * can destruct directly from the argument or inside the
 * function, however you like.
 *
 */

/**
 * Task II - difficulty 5/10
 *
 * The main idea now is to create basic filtering
 * functionality. I want to see above the products
 * four buttons. The buttons will be as followed:
 * "All", "With category", "With price", "With rating".
 *
 * Style the buttons as you like, BUT I want to see
 * some hover effects and cursor pointer of course.
 *
 * When pressing "All", show all the products.
 * When pressing "With category" show all the products that have category.
 * When pressing "With price" show all the products that have price.
 * When pressing "With rating" show all the products that have rating.
 */

/**
 * Task III - difficulty 8/10
 *
 * The main idea now is to make the buttons dynamic.
 * For now I guess you've created the filter buttons
 * HARD CODED into the html. I want it to be as
 * dynamic as possible.
 *
 * I want you to create a HARD CODED button with the
 * text "All" as you had before.
 * Check which properties does not included in all the
 * products, and only them will become buttons.
 *
 * @example
 * { id: 1, title: dsa, type: 1 }
 * { id: 1, title: dsa }
 * { id: 1, title: dsa, type: 1, rate: 9 }
 * { id: 1, title: dsa, rate: 7 }
 *
 * Not all products has the "type" and "rate" properties
 * so only those properties will become filtering buttons.
 *
 * Display the buttons and make sure everything is
 * working as intended.
 *
 * FUNCTION create a function called "getButtonTemplate"
 * in your templates.js and export it to the main file.
 * I want you to create the button template html
 * in this file and use it the same as you did for the
 * products. The tricky part here might be to think
 * how the click function will work.
 */

import { temp } from "./temp.js";
import { data } from "./data.js";

let filter = data;
const allButton = document.querySelector("#allButton");
const categoryButton = document.querySelector("#categoryButton");
const priceButton = document.querySelector("#priceButton");
const ratingButton = document.querySelector("#ratingButton");
const display = document.querySelector("#display");

temp(filter);

allButton.addEventListener("click", all);
categoryButton.addEventListener("click", filterCategory);
priceButton.addEventListener("click", filterPrice);
ratingButton.addEventListener("click", filterRating);

function all() {
  display.innerHTML = "";
  filter = data;
  temp(filter);
}

function filterCategory() {
  display.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.category !== undefined;
  });

  temp(filter);
}

function filterPrice() {
  display.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.price !== undefined;
  });

  temp(filter);
}

function filterRating() {
  display.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.rating !== undefined;
  });

  temp(filter);
}

function clean() {
  display.innerHTML = "";
  filter = data;
  filter = filter.filter((data) => {
    return data.rating !== undefined;
  });

  temp(filter);
}
