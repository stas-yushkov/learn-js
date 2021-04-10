// logo
// Автопроверка домашних заданий по JavaScript

// Задача 2 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Переопределение значения переменной
// Для того, чтобы объявить переменную, которой в будущем можно будет присвоить новое значение, используется ключевое слово let. Создание переменной без ключевого слова let или const приведёт к ошибке.

// let age = 5;
// age = 10;

// let userName = 'Манго';
// userName = 'Поли;
// Попытка обратиться к переменной по имени до её объявления вызовет ошибку.

// Например, нельзя пытаться прочитать или изменить значение переменой до ее объявления:

// // ❌ Неправильно, будет ошибка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// // Объявление переменной age
// let age = 20;

// // ✅ Правильно, обращаемся после объявления
// age = 25;
// console.log(age); // 25
// Задание
// Имя товара изменили на 'Repair Droid' и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// Тесты
// Переменная pricePerItem объявлена с помощью let.
// При объявлении переменной pricePerItem присвоено значение число 2000.
// Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500.
// Переменная productName объявлена с помощью let.
// При объявлении переменной productName присвоено значение - строка 'Droid'.
// Переменной productName присвоено новое значение - строка 'Repair droid'.
// Редактор JavaScript:
// 1
// // Start code
// 2
// let productName = 'Droid';
// 3
// let pricePerItem = 2000;
// 4
// ​
// 5
// // Write your code under this line
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

// Start code
// Start code
let productName = 'Droid';
let pricePerItem = 2000;

// Write your code under this line

productName = 'Repair droid';
pricePerItem = 3500;


console.log(productName, pricePerItem);

