import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'


// anonymous fun  ==> fun without name
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
