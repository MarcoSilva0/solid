import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { Persistency } from './services/Persistency';
import { Product } from './classes/Product';
import { ShoppingCart } from './classes/ShoppingCart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Shirt', 10.29, 1));
shoppingCart.addItem(new Product('Shoes', 39.12, 1));
shoppingCart.addItem(new Product('Hat', 1.99, 1));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
