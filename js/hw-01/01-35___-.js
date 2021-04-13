// logo
// Автопроверка домашних заданий по JavaScript

// Задача 35 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Метод includes()
// Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква 'a' не равна букве 'А'.

// const productName = 'Ремонтный дроид';

// console.log(productName.includes('н')); // true
// console.log(productName.includes('Н')); // false
// console.log(productName.includes('дроид')); // true
// console.log(productName.includes('Дроид')); // false
// console.log(productName.includes('Ремонтный')); // true
// console.log(productName.includes('ремонтный')); // false
// Задание
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// Тесты
// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName('Егор Колбасов', 'Егор') возвращает true.
// Вызов функции checkForName('Егор Колбасов', 'егор') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'егОр') возвращает false.
// Вызов функции checkForName('Егор Колбасов', 'Женя') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Вадим') возвращает true.
// Вызов функции checkForName('Вадим Некрасов', 'вадим') возвращает false.
// Вызов функции checkForName('Вадим Некрасов', 'Дима') возвращает false.
// Редактор JavaScript:
// 1
// function checkForName(fullName, name) {
// 2
//  const result = ; // Дополни эту строку
// 3
//   return result;
// 4
// }
// 5
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

function checkForName(fullName, name) {
 const result = fullName + name; // Дополни эту строку
  return result;
}

console.log(checkForName('dddd','d'))