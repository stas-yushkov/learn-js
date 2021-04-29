// logo
// Автопроверка домашних заданий по JavaScript

// Задача 18 / 41
// Модуль:
// 3

// Скрыть задание
// Обратная связь
// ↔
// Задача. Поиск объекта по значению свойства
// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// Тесты
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice('Радар') возвращает 1300.
// Вызов getProductPrice('Захват') возвращает 1200.
// Вызов getProductPrice('Сканер') возвращает 2700.
// Вызов getProductPrice('Дроид') возвращает 400.
// Вызов getProductPrice('Двигатель') возвращает null.
// Редактор JavaScript:
// 1
// const products = [
// 2
//   { name: 'Радар', price: 1300, quantity: 4 },
// 3
//   { name: 'Сканер', price: 2700, quantity: 3 },
// 4
//   { name: 'Дроид', price: 400, quantity: 7 },
// 5
//   { name: 'Захват', price: 1200, quantity: 9 },
// 6
// ];
// 7
// ​
// 8
// function getProductPrice(productName) {
// 9
//   // Пиши код ниже этой строки
// 10

// 11

// 12

// 13
//   // Пиши код выше этой строки
// 14
// }
// 15
// ​
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }

  return null;
  // Пиши код выше этой строки
}

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

console.log(getProductPrice('Радар'));
