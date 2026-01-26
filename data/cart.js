export const cart = [];

export function addToCart(productId) {
      let matchingItem;
      cart.forEach((cartItem)=>{
        // check if item already exist
          if(productId === cartItem.productId){
             matchingItem = cartItem;      
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
}