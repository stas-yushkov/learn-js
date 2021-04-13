// logo
// Автопроверка домашних заданий по JavaScript

// Задача 23 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Логическое «НЕ» (оператор !)
// Все операторы, которые мы рассматривали до этого, были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

// !выражение
// Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!'Манго'); // !'Манго' -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!''); // !'' -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false
// Задание
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// Тесты
// Объявлена функция isNumberNotInRange(start, end, number).
// В выражении использован оператор !.
// Вызов isNumberNotInRange(10, 30, 17) возвращает false.
// Вызов isNumberNotInRange(10, 30, 5) возвращает true.
// Вызов isNumberNotInRange(20, 50, 24) возвращает false.
// Вызов isNumberNotInRange(20, 50, 76) возвращает true.
// Редактор JavaScript:
// 1
// function isNumberNotInRange(start, end, number) {
// 2
//   const isInRange = number >= start && number <= end;
// 3
//   const isNotInRange = ; // Дополни эту строку
// 4
// ​
// 5
//   return isNotInRange;
// 6
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

// console.log("!true",!true); // false
// console.log("!false",!false); // true
// console.log("!3",!3); // !3 -> !true -> false
// console.log("!'Манго'",!'Манго'); // !'Манго' -> !true -> false
// console.log("!0",!0); // !0 -> !false -> true
// console.log("!''",!''); // !'' -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку

  return isNotInRange;
}

let start = 10;
let end = 30;
let number = 17;
console.log(`Вызов isNumberNotInRange(${start}, ${end}, ${number}) возвращает false.`, isNumberNotInRange(start, end, number));
start = 10;
end = 30;
number = 5;
console.log(`Вызов isNumberNotInRange(${start}, ${end}, ${number}) возвращает true.`, isNumberNotInRange(start, end, number));
start = 20;
end = 50;
number = 24;
console.log(`Вызов isNumberNotInRange(${start}, ${end}, ${number}) возвращает false.`, isNumberNotInRange(start, end, number));
start = 20;
end = 50;
number = 76;
console.log(`Вызов isNumberNotInRange(${start}, ${end}, ${number}) возвращает true.`, isNumberNotInRange(start, end, number));
