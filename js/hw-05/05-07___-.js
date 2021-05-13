// logo
// Автопроверка домашних заданий по JavaScript

// Задача 7 / 19
// Модуль:
// 5

// Скрыть задание
// Обратная связь
// ↔
// Конструктор строк
// Задание
// С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлена функция StringBuilder(baseValue).

// Вызов StringBuilder.prototype.hasOwnProperty('getValue') возвращает true.

// Вызов StringBuilder.prototype.hasOwnProperty('padEnd') возвращает true.

// Вызов StringBuilder.prototype.hasOwnProperty('padStart') возвращает true.

// Вызов StringBuilder.prototype.hasOwnProperty('padBoth') возвращает true.

// В результате вызова new StringBuilder('.') значение переменной builder это объект.

// Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.

// У объекта builder есть свойство value.

// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку '.'.

// Второй вызов builder.getValue(), после вызова builder.padStart('^'), возвращает строку '^.'.

// Третий вызов builder.getValue(), после вызова builder.padEnd('^'), возвращает строку '^.^'.

// Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='), возвращает строку '=^.^='.

// Редактор JavaScript:
// 1
// ​
// 2
// ​
// 3
// ​
// 4
// // Пиши код выше этой строки
// 5
// const builder = new StringBuilder('.');
// 6
// console.log(builder.getValue()); // '.'
// 7
// builder.padStart('^');
// 8
// console.log(builder.getValue()); // '^.'
// 9
// builder.padEnd('^');
// 10
// console.log(builder.getValue()); // '^.^'
// 11
// builder.padBoth('=');
// 12
// console.log(builder.getValue()); // '=^.^='
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
  this.value = this.value + str;
};

StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value;
};

StringBuilder.prototype.padBoth = function (str) {
  this.value = str + this.value + str;
};

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
