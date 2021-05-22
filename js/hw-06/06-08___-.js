// logo
// Автопроверка домашних заданий по JavaScript

// Задача 8 / 44
// Модуль:
// 6

// Скрыть задание
// Обратная связь
// ↔
// Задача. Общие элементы 2.0
// Задание
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Тесты
// -Объявлена переменная getCommonElements.

// Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray).
// Для перебора массива firstArray использован метод forEach.
// Коллбек для метода forEach это стрелочная функция.
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// Редактор JavaScript:
// 1
// // Пиши код ниже этой строки
// 2
// function getCommonElements(firstArray, secondArray) {
// 3
//     const commonElements = [];
// 4

// 5
//     firstArray.forEach(function (element) {
// 6
//       if (secondArray.includes(element)) {
// 7
//         commonElements.push(element);
// 8
//       }
// 9
//     });
// 10

// 11
//     // Пиши код выше этой строки
// 12
//     return commonElements;
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

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
};
