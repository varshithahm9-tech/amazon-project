// use PascalCase for things that generate objects
// class == object generator
class Cart {
    cartItems;

    // private property ==> to acess inside the class
    #localStorageKey;
    
    // run the setup code
    // should not return anything 
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey ;
        this.#loadFromStorage(); 
    }

    // method private
    #loadFromStorage()  {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) ;


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
    };

    saveToStorage() {
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
    };

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
    }

    removeFromCart(productId){
    const newCart = [];
    this.cartItems.forEach((cartItem)=>{
      
       if(cartItem.productId  !== productId){
            newCart.push(cartItem); 
       }
    });

    this.cartItems = newCart;
    this.saveToStorage();
    }

    updateQuantity(productId, newQuantity) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });

        matchingItem.quantity = newQuantity;

        this.saveToStorage();
    }

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
    }

    getCartQuantity() {
        const cart =  JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
        let cartQuantity = 0 ;
        cart.forEach((cartItem)=>{
            cartQuantity += cartItem.quantity;
        });

        return cartQuantity;
    }

}




const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


// Private field '#localStorageKey' must be declared in an enclosing class (at cart-class.js:123:5)
// cart.#localStorageKey = 'test';


console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);
 


