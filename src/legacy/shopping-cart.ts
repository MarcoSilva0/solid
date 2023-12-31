type CartItemLegacy = {
  name: string;
  price: number;
  quantity: number;
};

type OrderStatusLegacy = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItemLegacy[] = [];
  private _orderStatus: OrderStatusLegacy = 'open';

  get items(): Readonly<CartItemLegacy[]> {
    return this._items;
  }

  get orderStatus(): OrderStatusLegacy {
    return this._orderStatus;
  }

  addItem(item: CartItemLegacy): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho Vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMenssage(`Seu pedido com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMenssage(msg: string): void {
    console.log('Mensagem Enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com successo');
  }

  clear(): void {
    console.log('Carrinho foi limpo');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: 'Shirt', price: 10.29, quantity: 1 });
shoppingCart.addItem({ name: 'Shoes', price: 39.12, quantity: 1 });
shoppingCart.addItem({ name: 'Hat', price: 1.99, quantity: 1 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
