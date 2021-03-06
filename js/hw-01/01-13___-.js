// logo
// Автопроверка домашних заданий по JavaScript

// Задача 13 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Операторы сравнения >, >=, < и <=
// Используются для сравнения двух значений. Результатом своего выполнения возвращают буль - true или false, то есть «да» или «нет».

// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false
// Задание
// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// Тесты
// Объявлена функция isAdult(age).
// В выражении проверки используется оператор >=.
// Вызов isAdult(20) возвращает true.
// Вызов isAdult(14) возвращает false.
// Вызов isAdult(8) возвращает false.
// Вызов isAdult(37) возвращает true.
// Редактор JavaScript:
// 1
// function isAdult(age) {
// 2
//   // Пиши код ниже этой строки
// 3
//   const passed = ;
// 4
// ​
// 5
//   // Пиши код выше этой строки
// 6
//   return passed;
// 7
// }
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

const a = 2;
const b = 5;

console.log("a = ", a); // a
console.log("b = ", b); // b
console.log("a > b, ", `${a} > ${b}, `, a > b); // false
console.log("b > a, ", `${b} > ${a}, `, b > a); // true
console.log("a >= b, ", `${a} >= ${b}, `, a >= b); // false
console.log("b >= a, ", `${b} >= ${a}, `, b >= a); // true

console.log("a < b, ", `${a} < ${b}, `, a < b); // true
console.log("b < a, ", `${b} < ${a}, `, b < a); // false
console.log("a <= b, ", `${a} <= ${b}, `, a <= b); // true
console.log("b <= a, ", `${b} <= ${a}, `, b <= a); // false

function isAdult(age) {
  // Пиши код ниже этой строки
  const passed = age >= 18;

  // Пиши код выше этой строки
  return passed;
}

console.log(-3,isAdult(-3))
console.log(0,isAdult(0))
console.log(4,isAdult(4))
console.log(18,isAdult(18))
console.log(22,isAdult(22))