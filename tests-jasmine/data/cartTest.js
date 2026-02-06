import { addToCart,cart,loadFromStorage } from '../../data/cart.js';


describe('test suite: addToCart',() => {
    it('adds an existing product to the cart', () => {

    });
    it('adds a new products to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([]);
    });

    spyOn(localStorage, 'setItem').and.callFake(() => {});

    // ✅ Mock DOM element
    document.body.innerHTML = `<div class="js-cart-quantity"></div>`;

    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);

    expect(cart.length).toEqual(1);
});


    // it('adds a new products to the cart',() => {
    //     // create fake cart object 
    //     // this results an object
    //     spyOn(localStorage,'getItem').and.callFake(() => {
    //         // convert into string
    //         return JSON.stringify([]);
    //     });

    //     console.log(localStorage.getItem('cart'));
    //     // document.body.innerHTML = `<div class="js-cart-quantity"></div>`;
    //     loadFromStorage();

    //     addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    //     expect(cart.length).toEqual(1);
    // });
})