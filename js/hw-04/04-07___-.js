// logo
// Автопроверка домашних заданий по JavaScript

// Задача 7 / 10
// Модуль:
// 4

// Скрыть задание
// Обратная связь
// ↔
// Метод call
// Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом функция не является его методом. Для этого у функций есть методы call и apply.

// foo.call(obj, arg1, arg2, ...)
// Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2 и т. д.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };

// greetGuest.call(mango, "Добро пожаловать");
// // Добро пожаловать, Манго.

// greetGuest.call(poly, "С приездом");
// // С приездом, Поли.
// Задание
// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из массива orders с помощью цикла for.

// Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Функция composeMessage вызывается методом call внутри цикла for.
// Объявлена переменная messages.
// Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].
// Редактор JavaScript:
// 1
// const orders = [
// 2
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
// 3
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
// 4
//   { email: 'jacob@mail.com', dish: 'Taco' },
// 5
// ];
// 6
// ​
// 7
// // Пиши код ниже этой строки
// 8
// function composeMessage(position) {}
// 9
// ​
// 10
// const messages = [];
// 11
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

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   const { dish, email } = this[position];
//   return `Готовим ${dish} для ${email}. Ваш заказ ${position + 1}-й в очереди.`;
// }

// const messages = [];

// for (let index = 0; index < orders.length; index++) {
//   // const element = orders[index];
//   // messages.push(element);
//   messages.push(composeMessage.call(orders, index));
//   // composeMessage.call(orders, index);
//   // console.log(composeMessage.call(orders, index));
// }
// console.log(messages);

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
    position + 1
  }-й в очереди.`;
}

const messages = [];

for (let index = 0; index < orders.length; index++) {
  messages.push(composeMessage.call(orders[index], index));
}
console.log(messages);
