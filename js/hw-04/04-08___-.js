// logo
// Автопроверка домашних заданий по JavaScript

// Задача 8 / 10
// Модуль:
// 4

// Скрыть задание
// Обратная связь
// ↔
// Метод apply
// Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

// foo.call(obj, arg1, arg2, ...)

// foo.apply(obj, [arg1, arg2, ...])
// Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д. На практике, в основном используется метод call.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };

// greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.
// Задание
// Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.

// Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Функция composeMessage вызывается методом apply.
// Объявлена переменная messages.
// Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].
// Редактор JavaScript:
// 1
// const orders = [
// 2
//   { email: "solomon@topmail.ua", dish: "Burger" },
// 3
//   { email: "artemis@coldmail.net", dish: "Pizza" },
// 4
//   { email: "jacob@mail.com", dish: "Taco" },
// 5
// ];
// 6
// ​
// 7
// // Пиши код ниже этой строки
// 8
// function composeMessage(position) {
// 9
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// 10
// }
// 11
// ​
// 12
// const messages = [];
// 13
// for (let i = 0; i < orders.length; i++) {
// 14
//   const msg = composeMessage.call(orders[i], i + 1);
// 15
//   messages.push(msg);
// 16
// }
// 17
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

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = { username: 'Манго' };
const poly = { username: 'Поли' };

greetGuest.apply(mango, ['Добро пожаловать']); // Добро пожаловать, Манго.
greetGuest.apply(poly, ['С приездом']); // С приездом, Поли.
