// logo
// Автопроверка домашних заданий по JavaScript

// Задача 19 / 41
// Модуль:
// 3

// Скрыть задание
// Обратная связь
// ↔
// Задача. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName).
// Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
// Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
// Вызов getAllPropValues('category') возвращает [].
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
// function getAllPropValues(propName) {
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

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const allPropValues = [];
  for (const product of products) {
    if (product[propName]) {
      allPropValues.push(product[propName]);
    }
  }

  return allPropValues;
  // Пиши код выше этой строки
}

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
console.log(getAllPropValues('name'));
