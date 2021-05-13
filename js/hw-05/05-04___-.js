// logo
// Автопроверка домашних заданий по JavaScript

// Задача 4 / 19
// Модуль:
// 5

// Скрыть задание
// Обратная связь
// ↔
// Объект настроек
// Функции-конструкторы всегда принимают большое количество входных данных для свойств будущего объекта. Поэтому, к ним также можно применить паттерн «Объект настроек», передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });
// Задание
// Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.

// Тесты
// Объявлена функция Car({ brand, model, price }).
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.
// Редактор JavaScript:
// 1
// function Car(brand, model, price) {
// 2
//   this.brand = brand;
// 3
//   this.model = model;
// 4
//   this.price = price;
// 5
// }
// 6
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

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
