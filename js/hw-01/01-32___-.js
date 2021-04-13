// logo
// Автопроверка домашних заданий по JavaScript

// Задача 32 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Метод slice()
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

// const productName = 'Ремонтный дроид';
// console.log(productName.slice(0, 4)); // 'Ремо'
// console.log(productName.slice(3, 9)); // 'онтный'
// console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
// console.log(productName.slice(10, productName.length)); // 'дроид'
// Задание
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// Тесты
// Объявлена функция getSubstring(string, length).
// Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
// Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
// Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
// Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
// Вызов функции getSubstring('Привет мир', 0) возвращает ''.
// Редактор JavaScript:
// 1
// function getSubstring(string, length) {
// 2
//   const substring = ; // Дополни эту строку
// 3
// ​
// 4
//   return substring;
// 5
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

function getSubstring(string, length) {
  const substring = string.slice(0,length); // Дополни эту строку

  return substring;
}

console.log(`Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.`, getSubstring('Привет мир', ('Привет мир'.length)));
console.log('Привет мир'.length);
console.log('Привет мир'.slice(0));
console.log(`Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.`, getSubstring('Привет мир', 10));
console.log(`Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.`, getSubstring('Привет мир', 8));
console.log(`Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.`, getSubstring('Привет мир', 10));
console.log(`Вызов функции getSubstring('Привет мир', 0) возвращает ''.`, getSubstring('Привет мир', 0));

function getCharactersInColumn(string, length) {
  let substring = string.slice(0,length); // Дополни эту строку
  // while (0) {
  //   console.log(1);
  // }
  return substring;
}

console.log(getCharactersInColumn('Привет мир', 10))