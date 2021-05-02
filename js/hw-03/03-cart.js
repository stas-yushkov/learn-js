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
        // console.log(product.name, 'already added');
        // console.log(item);
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);

    // this.items.push(product);
  },

  remove(productName) {
    const { items } = this; //тут лежит указатель на массив
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (name === productName) {
        items.splice(i, 1);
        // console.log('index', i);
        // console.log('  removed productName', productName);
      }
    }

    // for (let i = 0; i < this.items.length; i += 1) {
    //   const { name } = this.items[i];
    //   if (name === productName) {
    //     this.items.splice(i, 1);
    //   }
    // }

    // for (let i = 0; i < this.items.length; i += 1) {
    //   const item = this.items[i];
    //   if (item.name === productName) {
    //     this.items.splice(i, 1);
    //   }
    // }

    // for (let i = 0; i < this.items.length; i += 1) {
    //   if (this.items[i].name === productName) {
    //     this.items.splice(i, 1);
    //   }
    // }

    // for (const item of this.items) {
    //   if (item['name'] === productName) {
    //     this.items.splice(this.items.indexOf(item), 1);
    //   }
    // }
  },

  clear() {
    this.items = [];

    // this.items.splice(0, this.items.length);
  },

  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;
    for (const { price } of items) {
      totalPrice += price;
    }
    return totalPrice;

    // let totalPrice = 0;
    // for (const item of this.items) {
    //   totalPrice += item.price;
    // }
    // return totalPrice;
  },

  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
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

cart.remove('🍇');
console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
