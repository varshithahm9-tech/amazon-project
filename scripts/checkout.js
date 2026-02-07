import { loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'
import { loadCart } from "../data/cart.js";

// promises help keep our code flat
// use promises instead of callbacks

//async and await shortcut for promise
// await ==> wait till promise to finish

// we can use await only inside the async fun
async function loadPage() {
    console.log('load page');
    await  loadProductsFetch();

    const value = await new Promise((resolve) =>{
        loadCart(()=>{
            resolve('value3');
        });   
    });

    renderOrderSummary();
    renderPaymentSummary(); 
}
loadPage();


// Promise.all([
//     loadProductsFetch(),

//     new Promise((resolve) =>{
//         loadCart(()=>{
//             resolve();
//         });   
//     })

// ]).then((values)=>{
//     console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary();
// });


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


