//importing module
import { shoppingCart, totalAmount, totalQuantity } from './exportingModule.js';
console.log("importing Module");
shoppingCart("Puma Tshirt", 2);
shoppingCart("Puma Tshirt", 2);
shoppingCart("Puma Tshirt", 2);     
console.log(`Data imported from other module : Total Amount is ${totalAmount}, ${totalQuantity}`);