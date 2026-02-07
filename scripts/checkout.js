import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'
import { loadCart } from "../data/cart.js";

// promises help keep our code flat
// use promises instead of callbacks

// promise.all() ==> run mul promises at the same time
//  and wait for all of them to finish

Promise.all([
    new Promise((resolve)=>{
    loadProducts(() =>{
        // wait each steps to finish
        resolve('value1');
    });
    }),

    new Promise((resolve) =>{
        loadCart(()=>{
            resolve();
        });   
    })

]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});


// new Promise((resolve)=>{
//     loadProducts(() =>{
//         // wait each steps to finish
//         resolve('value1');
//     });
// }).then((value)=>{
//     console.log(value); 
//     return new Promise((resolve) =>{
//         loadCart(()=>{
//             resolve();
//         });   
//     });
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// anonymous fun  ==> fun without name
// loadProducts(()=>{
//     loadCart(()=>{
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });


