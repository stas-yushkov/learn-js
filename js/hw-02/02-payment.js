// /*
//  * Посчитать общую сумму покупок в корзине
//  */
// // 1 перебрать массив
// // 2 сделать переменную total до цикла
//  // 3 каждый элемент приплюслвать к total

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // 2 сделать переменную total до цикла
// let total = 0;

// // 1 перебрать массив

// // for (let i = 0; i < cart.length; i += 1) {
// //   // console.log(cart[i]);
// //   // 3 каждый элемент приплюслвать к total
// //   total += cart[i];
// //   // total = total + cart[i];
// // }

// for (const iterator of cart) {
//   total += iterator;
// }

// // for (const value of cart) {
// //   total += value;
// // }

// console.log('Total: ', total);

// Добавить такс (налог)

for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i] * 1.1);
}

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }//тут не сработает

console.log(cart);