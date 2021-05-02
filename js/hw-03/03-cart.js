/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    console.table(this.items);
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this; //тут лежит указатель на массив
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (name === productName) {
        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;
    for (const { price, quantity } of items) {
      totalPrice += price * quantity;
    }
    return totalPrice;
  },

  increaseQuantity(productName) {
    for (let item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName) {
        item.quantity -= 1;
      }
      if (item.quantity === 0) {
        const indexOfItem = items.indexOf(item);
        items.splice(indexOfItem, 1);
      }
    }
  },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍇');
console.table(cart.getItems());

// cart.increaseQuantity('🍋');
// cart.increaseQuantity('🍋');
// cart.increaseQuantity('🍋');
// cart.increaseQuantity('🍋');
cart.increaseQuantity('🍎');
console.table(cart.getItems());

cart.decreaseQuantity('🍋');
console.table(cart.getItems());
cart.decreaseQuantity('🍋');
console.table(cart.getItems());
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

const getProductTotalPrice = function ({ price, quantity }) {
  return price * quantity;
};

// console.log(getProductTotalPrice(cart.items[2]));

cart.clear();
console.log(cart.getItems());
