import { cart,addToCart, getCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import  formatCurrency  from "./utils/money.js";
// modules avoids the naming conflicts
updateCartQuantity();

let productsHTMl = '';
products.forEach((product)=>{
    productsHTMl += `
       <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${product.extraInfoHTML()}
          
          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>


          <p class="js-alert-addToCart "></p>
          <button class="add-to-cart-button 
          button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTMl

function updateCartQuantity(){
    // let cart section interactive
    let cartQuantity = getCartQuantity();
    document.querySelector('.js-cart-quantity').textContent = cartQuantity || 0;

}

document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
    button.addEventListener('click',() => {
      // date set convert kebab-case to camel case
      // console.log(button.dataset.productName);

      const productId = button.dataset.productId;

       // get the parent product container
      const productContainer = button.closest('.product-container');
      
      const alertMessage =
        productContainer.querySelector('.js-alert-addToCart');

      alertMessage.innerHTML = 'Added to cart';

      setTimeout(() => {
        alertMessage.innerHTML = '';
      }, 2000);

      // get selected quantity
      const quantitySelector =
        productContainer.querySelector('.js-quantity-selector');

      const quantity = Number(quantitySelector.value);
      console.log(quantity);
      

      addToCart(productId,quantity);
    });
  }
)