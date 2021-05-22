// logo
// Автопроверка домашних заданий по JavaScript

// Задача 3 / 44
// Модуль:
// 6

// Скрыть задание
// Обратная связь
// ↔
// Задача. Общие элементы
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Тесты
// Объявлена функция getCommonElements(firstArray, secondArray).
// Для перебора параметра (массива) использован метод forEach.
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// Редактор JavaScript:
// 1
// function getCommonElements(firstArray, secondArray) {
// 2
//     const commonElements = [];
// 3
//     // Пиши код ниже этой строки
// 4

// 5
//     for (let i = 0; i < firstArray.length; i += 1) {
// 6
//       if (secondArray.includes(firstArray[i])) {
// 7
//         commonElements.push(firstArray[i]);
// 8
//       }
// 9
//     }
// 10

// 11
//     return commonElements;
// 12
//     // Пиши код выше этой строки
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

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
  // Пиши код выше этой строки
}

console.log(
  '🚀 ~ getCommonElements([1, 2, 3], [2, 4])',
  getCommonElements([1, 2, 3], [2, 4]),
);
getCommonElements([1, 2, 3], [2, 4]);
