export function temp(data) {
  data.forEach((data) => {
    const div = document.createElement("div");

    div.innerHTML = `<div class="card">
        <div class="title">Title:${data.title}</div>
        <div class="category">Category:${
          data.category === undefined ? "default" : data.category
        }</div>
        <div class="price">Price:${
          data.price === undefined ? "default" : data.price
        }</div>
            <div class="rating">Rating: ${
              data.rating === undefined ? "default" : data.rating.rate
            }</div>
        </div>`;

    display.appendChild(div);
  });
}
