// logo
// Автопроверка домашних заданий по JavaScript

// Задача 29 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Чётные числа
// Проверка на четность

// function isEven (num) {
//   return num % 2 === 0;
// }
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// Тесты
// Объявлена функция getEvenNumbers(start, end).
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
// Вызов функции getEvenNumbers(8, 8) возвращает [8].
// Вызов функции getEvenNumbers(7, 7) возвращает [].
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив.
// Редактор JavaScript:
// 1
// function getEvenNumbers(start, end) {
// 2
//     // Пиши код ниже этой строки
// 3
// ​
// 4
// ​
// 5
    
// 6
//     // Пиши код выше этой строки
// 7
//   }
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности


function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  const evenNumbers = [];

  for (let i = start; i <= end; i+=1 ) {
    if (i % 2 === 0 ){ evenNumbers.push(i)};
  }

  return evenNumbers  ;
  // Пиши код выше этой строки
}

console.log( getEvenNumbers(2, 5));