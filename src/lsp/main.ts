/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/
import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { Persistency } from './services/Persistency';
import { Product } from './classes/Product';
import { ShoppingCart } from './classes/ShoppingCart';
import { NonePercentDiscount } from './classes/Discount';

const noneDiscount = new NonePercentDiscount();
const shoppingCart = new ShoppingCart(noneDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Shirt', 10.29, 1));
shoppingCart.addItem(new Product('Shoes', 39.12, 1));
shoppingCart.addItem(new Product('Hat', 1.99, 1));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
