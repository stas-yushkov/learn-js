/*
 * Оператор ветвеления if
 */

// console.log("before 'if'")
// if (5) {
//   console.log("inside 'if'")
// }
// console.log("after 'if'")

// if (5 > 30) {
//   //  тело
//   console.log('qweqwe');
// }

// console.log('дальше');
/*
 * Оператор ветвления if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

// const salary = 5000;
// console.log('\n',salary);

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }

// console.log('qweqwe');

/*
 * Тернарный оператор
 */
const balance = 90000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);

/*
 * Блочная область видимости переменных
 */
let a;
if (true) {
   a = 5;
  // console.log(b);
}

if (true) {
  const b = 10;

  console.log("b",b);
}

console.log("a",a);
console.log("b not defined in global",b);