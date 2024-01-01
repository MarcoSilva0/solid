import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';
import { ShoppingCart } from './ShoppingCart';
import { CustomerOrder } from './interfaces/customer-protocol';
import { OrderStatus } from './interfaces/order-status';

export class Order {
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly cusomer: CustomerOrder,
  ) {}

  private _orderStatus: OrderStatus = 'open';

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';

    this.messaging.sendMenssage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );

    this.persistency.saveOrder();
    this.cart.clear();

    console.log('O cliente é:', this.cusomer.getName(), this.cusomer.getIDN());
  }
}
