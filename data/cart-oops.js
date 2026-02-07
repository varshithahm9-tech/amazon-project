// object -oriented programming

// this points outer object i.e cart

// function helps to create new object every time we call this
// Cart ==> Pascal case ==> means fun name starts with capital 
function Cart(localStorageKey) {
    const cart = {
    cartItems : undefined,
    loadFromStorage()  {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) ;


        if(!this.cartItems) {
        this.cartItems =[
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
    },

    saveToStorage() {
        localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
    },

    addToCart(productId,quantity) {
      let matchingItem;
      this.cartItems.forEach((cartItem)=>{
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
          this.cartItems.push({
          productId,
          quantity,
          deliveryOptionId:'1'
        });
      }

    this.saveToStorage();
    // document.querySelector('.js-cart-quantity').textContent = this.getCartQuantity();
    },

    removeFromCart(productId){
    const newCart = [];
    this.cartItems.forEach((cartItem)=>{
      
       if(cartItem.productId  !== productId){
            newCart.push(cartItem); 
       }
    });

    this.cartItems = newCart;
    this.saveToStorage();
    },

    // This code was copied from the solutions of exercises 14f - 14n.
    updateQuantity(productId, newQuantity) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });

        matchingItem.quantity = newQuantity;

        this.saveToStorage();
    },

    updateDeliveryOption(productId,deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((cartItem)=>{
            // check if item already exist
            if(productId === cartItem.productId){
                matchingItem = cartItem;      
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    },

    getCartQuantity() {
        const cart =  JSON.parse(localStorage.getItem(localStorageKey)) || [];
        let cartQuantity = 0 ;
        cart.forEach((cartItem)=>{
            cartQuantity += cartItem.quantity;
        });

        return cartQuantity;
    }
    };

    return cart;
}


const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage(); 
businessCart.loadFromStorage();


// cart.addToCart('54e0eccd-8f36-462b-b68a-8182611d9add',5);



console.log(cart);
console.log(businessCart);


