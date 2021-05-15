// logo
// Автопроверка домашних заданий по JavaScript

// Задача 13 / 19
// Модуль:
// 5

// Скрыть задание
// Обратная связь
// ↔
// Задача. Конструктор строк 2.0
// Задание
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder.
// Свойство value в классе StringBuilder объявлено приватным.
// Вызов StringBuilder.prototype.hasOwnProperty('getValue') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padEnd') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padStart') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padBoth') возвращает true.
// В результате вызова new StringBuilder('.') значение переменной builder это объект.
// Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.
// У объекта builder нет свойства value.
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку '.'.
// Второй вызов builder.getValue(), после вызова builder.padStart('^'), возвращает строку '^.'.
// Третий вызов builder.getValue(), после вызова builder.padEnd('^'), возвращает строку '^.^'.
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='), возвращает строку '=^.^='.
// Редактор JavaScript:
// 1
// function StringBuilder(baseValue) {
// 2
//   this.value = baseValue;
// 3
// }
// 4
// ​
// 5
// StringBuilder.prototype.getValue = function () {
// 6
//   return this.value;
// 7
// };
// 8
// ​
// 9
// StringBuilder.prototype.padEnd = function (str) {
// 10
//   this.value += str;
// 11
// };
// 12
// ​
// 13
// StringBuilder.prototype.padStart = function (str) {
// 14
//   this.value = str + this.value;
// 15
// };
// 16
// ​
// 17
// StringBuilder.prototype.padBoth = function (str) {
// 18
//   this.padStart(str);
// 19
//   this.padEnd(str);
// 20
// };
// 21
// ​
// 22
// // Пиши код выше этой строки
// 23
// const builder = new StringBuilder('.');
// 24
// console.log(builder.getValue()); // '.'
// 25
// builder.padStart('^');
// 26
// console.log(builder.getValue()); // '^.'
// 27
// builder.padEnd('^');
// 28
// console.log(builder.getValue()); // '^.^'
// 29
// builder.padBoth('=');
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

class StringBuilder {
  #value;
  constructor(baseValue) {
    this.#value = baseValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
