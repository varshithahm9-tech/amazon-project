import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
// modules avoids the naming conflicts

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
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
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

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button 
          button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTMl


document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
    button.addEventListener('click',() => {
      // date set convert kebab-case to camel case
      // console.log(button.dataset.productName);


      const productId = button.dataset.productId;

      document.querySelectorAll('.js-quantity-selector')
      .forEach((el)=>{
          el.classList.add(`.js-quantity-selector-${productId}`);
      });


    console.log(document.querySelector(`.js-quantity-selector-${productId}`).value);
      

      let matchingItem;

      cart.forEach((item)=>{
        // check if item already exist
          if(productId === item.productId){
             matchingItem = item;      
          }
      });

      if(matchingItem) {
        //  if exists increase the quantity
        matchingItem.quantity += 1;
      }else {
        // not in a cart add item to tha cart
          cart.push({
          productId,
          quantity:1
        });
      }
    
    
      // let cart section interactive
      let cartQuantity = 0 ;
      cart.forEach((item)=>{
        cartQuantity += item.quantity;
       });

       document.querySelector('.js-cart-quantity')
       .innerHTML = cartQuantity;
    })
  }
)