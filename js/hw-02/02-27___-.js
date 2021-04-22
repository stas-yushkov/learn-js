// logo
// Автопроверка домашних заданий по JavaScript

// Задача 27 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Фильтрация массива чисел 2.0
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Тесты
// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// Функция calculateTotalPrice() использует цикл for..of.
// Редактор JavaScript:
// 1
// function filterArray(numbers, value) {
// 2
//   // Пиши код ниже этой строки
// 3
//   const filteredNumbers = [];
// 4
// ​
// 5
//   for (let i = 0; i < numbers.length; i += 1) {
// 6
//     const number = numbers[i];
// 7
// ​
// 8
//     if (number > value) {
// 9
//       filteredNumbers.push(number);
// 10
//     }
// 11
//   }
// 12
// ​
// 13
//   return filteredNumbers;
// 14
//   // Пиши код выше этой строки
// 15
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


function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}