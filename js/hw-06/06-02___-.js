// logo
// Автопроверка домашних заданий по JavaScript

// Задача 2 / 44
// Модуль:
// 6

// Скрыть задание
// Обратная связь
// ↔
// Задача. Фильтрация массива чисел
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Тесты
// Объявлена функция filterArray(numbers, value).
// Для перебора массива numbers использован метод forEach.
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// Редактор JavaScript:
// 1
// function filterArray(numbers, value) {
// 2
//     const filteredNumbers = [];
// 3
//     // Пиши код ниже этой строки
// 4

// 5
//     for (let i = 0; i < numbers.length; i += 1) {
// 6
//       if (numbers[i] > value) {
// 7
//         filteredNumbers.push(numbers[i]);
// 8
//       }
// 9
//     }
// 10

// 11
//     // Пиши код выше этой строки
// 12
//     return filteredNumbers;
// 13
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

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  numbers.forEach(element => {
    if (element > value) {
      filteredNumbers.push(element);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}

console.log(
  '🚀 ~ filterArray([1, 2, 3, 4, 5], 3)',
  filterArray([1, 2, 3, 4, 5], 3),
);
filterArray([1, 2, 3, 4, 5], 3);
