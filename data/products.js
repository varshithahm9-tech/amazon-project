import { formatCurrency } from '../scripts/utils/money.js';

export function getProduct(productId) {
   let matchingProduct;
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    return matchingProduct;
}

class Product {
   id;
   image;
   name;
   rating;
   priceCents;

   constructor(productDetail) {
      this.id = productDetail.id;
      this.image = productDetail.image;
      this.name = productDetail.name;
      this.rating = productDetail.rating;
      this.priceCents = productDetail.priceCents;
   }

   getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`
   }
   
   getPrice() {
    return `$${formatCurrency(this.priceCents)}`
   }

  //  method overriding
   extraInfoHTML() {
     return '';
   }
}

// Ineritence
// one class is a more specific type of another class
class Clothing extends Product {
    sizeChartLink;

    constructor(productDetails) {
      // call the parent consturctor
      super(productDetails);
      this.sizeChartLink = productDetails.sizeChartLink;
    }

    extraInfoHTML() {
      super.extraInfoHTML();
       return `
         <a href="${this.sizeChartLink}" target="_blank">
         Size Chart
         </a>
       `;
    }
}


// built in date class
// const date = new Date();
// console.log(date);

// console.log( date.toLocaleTimeString());


// console.log(this);


// const object2 = {
//   a:2,
//   b:this.a
// }

// special feature of this
// function logThis() {
//   console.log(this);  
// }

// logThis();
// // call ==> use add the extra param for the fun
// logThis.call('hello');


// // arrow does not change the value of this
// this
// const object3 = {
//   method:() => {
//     console.log(this); 
//   }
// }
// object3.method();


export let products = [];

export function loadProducts(fun) {
  const xhr =  new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
    products = JSON.parse(xhr.response).map((productDetails) => {
      if(productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });

    console.log('load products');
    fun();
  });

  xhr.open('GET','https://supersimplebackend.dev/products');
  xhr.send();
}
