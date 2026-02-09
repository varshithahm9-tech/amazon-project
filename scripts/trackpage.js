import { orders } from "../data/orders.js";
import { loadProductsFetch, getProduct } from "../data/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

async function loadTrackPage() {
  await loadProductsFetch();

  let trackHTML = "";

  console.log(orders);

  orders.forEach((order) => {
    console.log(order);

    trackHTML += `
        <div class="tracking-list">
         ${productsListHTML(order)}
        </div>
        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>
          <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>`;

  });

  function productsListHTML(order) {
    let trackListHTML = "";

    order.products.forEach((productDetails) => {
      const product = getProduct(productDetails.productId);

      console.log(product);

      trackListHTML += `
        <div class="delivery-date">
          ${dayjs(productDetails.estimatedDeliveryTime).format("MMMM D")}
        </div>

        <div class="product-info">
        ${product.name}
        </div>

        <div class="product-info">
          Quantity: ${productDetails.quantity}
        </div>

        <img class="product-image" src="${product.image}">
        `;
    });
    return trackListHTML;
  }

  document.querySelector(".js-order-tracking").innerHTML = trackHTML;
}

loadTrackPage();
