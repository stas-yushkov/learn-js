// logo
// Автопроверка домашних заданий по JavaScript

// Задача 5 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Шаблонные строки
// Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом. Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или одинарных и может содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками - ${выражение}.

// const guestName = 'Манго';
// const roomNumber = 207;
// const greeting = `Добро пожаловать ${guestName}, вы поселены в номер ${roomNumber}`;
// Задание
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов. Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// Тесты
// Объявлена переменная productName.
// Значение переменной productName это строка 'Дроид'.
// Объявлена переменная pricePerItem.
// Значение переменной price это число 3500.
// Объявлена переменная message.
// Значение переменной message это строка Вы выбрали Дроид, цена за штуку 3500 кредитов.
// Редактор JavaScript:
// 1
// // Базовый код
// 2
// const productName = 'Дроид';
// 3
// const pricePerItem = 3500;
// 4
// ​
// 5
// // Пиши код ниже этой строки
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

// Базовый код
const productName = 'Дроид';
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

console.log(message);