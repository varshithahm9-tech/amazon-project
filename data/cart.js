export let cart;

loadFromStorage(); 

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) ;


if(!cart) {
cart =[
    {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity:2,
          deliveryOptionId: '1'
      },
      {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity:1, 
          deliveryOptionId: '2'
      }
  ];
} 
}

export function saveToStorage() {
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId,quantity) {
      let matchingItem;
      cart.forEach((cartItem)=>{
        // check if item already exist
          if(productId === cartItem.productId){
             matchingItem = cartItem;      
          }
      });
      if(matchingItem) {
        //  if exists increase the quantity
        matchingItem.quantity += quantity;
      }else {
        // not in a cart add item to tha cart
          cart.push({
          productId,
          quantity,
          deliveryOptionId:'1'
        });
      }

    saveToStorage();
    document.querySelector('.js-cart-quantity').textContent = getCartQuantity();

}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
      
       if(cartItem.productId  !== productId){
            newCart.push(cartItem); 
       }
    });

    cart = newCart;
    saveToStorage();
}

// export function updateFromCart(input) {
//   if (!input) return;

//   // hide all other inputs
//   document.querySelectorAll('.js-update-input').forEach((el) => {
//     el.classList.add('hidden');
//   });

//   // show only this product input
//   input.classList.remove('hidden');
//   input.focus();
// }



// This code was copied from the solutions of exercises 14f - 14n.
export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId) {
      let matchingItem;
      cart.forEach((cartItem)=>{
        // check if item already exist
          if(productId === cartItem.productId){
             matchingItem = cartItem;      
          }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;

      saveToStorage();
}


export function getCartQuantity() {
    const cart =  JSON.parse(localStorage.getItem('cart')) || [];
    let cartQuantity = 0 ;
    cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
}



export function loadCart(fun) {
  const xhr =  new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
    fun();
  });

  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}