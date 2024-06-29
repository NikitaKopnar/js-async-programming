//exporting module
//Named export
console.log("Exporting module");
let shoppingCost = 10;
const cart = [];

const shoppingCart = function(itemName, quantity) {
    cart.push({itemName,quantity});
    console.log(`${itemName} is added to the cart and the quantity is ${quantity}`);
    console.log(cart)
}
const totalAmount = 200;
const totalQuantity = 2;

export { totalAmount, totalQuantity, shoppingCart}