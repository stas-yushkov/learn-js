// logo
// Автопроверка домашних заданий по JavaScript

// Задача 2 / 19
// Модуль:
// 5

// Скрыть задание
// Обратная связь
// ↔
// Задача. Цепочка прототипов
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// Тесты
// Объявлена переменная ancestor.
// Значение переменной ancestor это объект.
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Обращение к parent.surname возвращает 'Moore'.
// Обращение к parent.heritage возвращает 'Irish'.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает false.
// Вызов ancestor.isPrototypeOf(parent) возвращает true.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к ancestor.heritage возвращает 'Irish'.
// Вызов ancestor.hasOwnProperty('surname') возвращает true.
// Вызов ancestor.hasOwnProperty('heritage') возвращает true.
// Обращение к ancestor.surname возвращает 'Dawson'.
// Используется метод Object.create().
// Редактор JavaScript:
// 1
// const ancestor = {
// 2
//   name: 'Paul',
// 3
//   age: 83,
// 4
//   surname: 'Dawson',
// 5
//   heritage: 'Irish'
// 6
// };
// 7
// // Пиши код ниже этой строки
// 8
// ​
// 9
// const parent = {};
// 10
// parent.name = 'Stacey';
// 11
// parent.surname = 'Moore';
// 12
// parent.age = 54;
// 13
// ​
// 14
// const child = {};
// 15
// child.name = 'Jason';
// 16
// child.age = 27;
// 17
// ​
// 18
// // Пиши код выше этой строки
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки
