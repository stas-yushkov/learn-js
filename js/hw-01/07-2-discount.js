/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// const totalSpent = 2000;
// const totalSpent = 6000;
// const totalSpent = 3000;
// const totalSpent = 500;
const totalSpent = 50;
let payment = 500;
let discount = 0;
let partner = 'не партнёр'

if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 0.02;
  partner = 'бронзовый партнёр'
  console.log(`${partner}, скидка ${discount*100}%`)
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 0.05;
  partner = 'серебрянный партрёр'
  console.log(`${partner}, скидка ${discount*100}%`)
} else if (totalSpent >= 5000) {
  discount = 0.1;
  partner = 'золотой партрёр'
  console.log(`${partner}, скидка ${discount*100}%`)
} else {
  discount = 0;
  partner = 'не партрёр'
  console.log(`${partner}, скидка ${discount*100}%`)
} 

// if (totalSpent < 100) {
//   discount = 0.00;
//   partner = 'не партрёр'
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
//   partner = 'бронзовый партнёр'
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
//   partner = 'серебрянный партрёр'
// } else if (totalSpent >= 5000) {
//   discount = 0.1;
//   partner = 'золотой партрёр'
// } else {
 
// } 
// console.log(`${partner}, скидка ${discount*100}%`)

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount*100}%`)

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'