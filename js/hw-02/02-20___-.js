// logo
// Автопроверка домашних заданий по JavaScript

// Задача 20 / 32
// Модуль: 
// 2


// Скрыть задание
// Обратная связь
// ↔
// Подсчёт суммы покупки
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение.
// Редактор JavaScript:
// 1
// function calculateTotalPrice(order) {
// 2
//   let total = 0;
// 3
//   // Пиши код ниже этой строки
// 4
// ​
// 5
//   // Пиши код выше этой строки
// 6
//   return total;
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


function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let index = 0; index < order.length; index++) {
    total += order[index];
    
  }
  // Пиши код выше этой строки
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));