// logo
// Автопроверка домашних заданий по JavaScript

// Задача 9 / 10
// Модуль:
// 4

// Скрыть задание
// Обратная связь
// ↔
// Метод bind
// Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

// foo.bind(obj, arg1, arg2, ...)
// Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и аргументами arg1, arg2 и т. д. Получается копия функции которую можно передать куда угодно и вызвать когда угодно.

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = { service: 'Steam' };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

// const gmail = { service: 'Gmail' };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."
// Задание
// Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов. Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии с привязанным контекстом к соответствующим объектам.

// Тесты
// Объявлена переменная pizzaPalace.

// Значение переменной pizzaPalace это исходный объект.

// Объявлена переменная burgerShack.

// Значение переменной burgerShack это исходный объект.

// Объявлена функция composeMessage(customerName).

// Объявлена переменная pizzaPalaceComposer.

// Значение переменной pizzaPalaceComposer это копия функции composeMessage с контекстом привязанным к объекту pizzaPalace.

// Объявлена переменная pizzaPalaceMessage.

// Значение переменной pizzaPalaceMessage это строка 'Манго, всегда рады вас видеть в «Pizza Palace».'.

// Объявлена переменная burgerShackComposer.

// Значение переменной burgerShackComposer это копия функции composeMessage с контекстом привязанным к объекту burgerShack.

// Объявлена переменная burgerShackMessage.

// Значение переменной burgerShackMessage это строка 'Поли, всегда рады вас видеть в «Burger Shack».'.

// Редактор JavaScript:
// 1
// const pizzaPalace = {
// 2
//   company: 'Pizza Palace',
// 3
// };
// 4
// ​
// 5
// const burgerShack = {
// 6
//   company: 'Burger Shack',
// 7
// };
// 8
// ​
// 9
// function composeMessage(customerName) {
// 10
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// 11
// }
// 12
// // Пиши код ниже этой строки
// 13
// ​
// 14
// const pizzaPalaceComposer = composeMessage;
// 15
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
// 16
// ​
// 17
// const burgerShackComposer = composeMessage;
// 18
// const burgerShackMessage = burgerShackComposer('Поли');
// 19
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

const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');
