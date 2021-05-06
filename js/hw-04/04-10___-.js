// logo
// Автопроверка домашних заданий по JavaScript

// Задача 10 / 10
// Модуль:
// 4

// Скрыть задание
// Обратная связь
// ↔
// Метод bind и методы объекта
// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.

// Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.

// // ❌ Было
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.
// Задание
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.

// Тесты
// Объявлена переменная service.
// Значение переменной service это оригинальный объект.
// Объявлена функция logAndInvokeAction(email, action).
// Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.
// Редактор JavaScript:
// 1
// const service = {
// 2
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
// 3
//   subscribe(email) {
// 4
//     this.mailingList.push(email);
// 5
//     return `Почта ${email} добавлена в рассылку.`;
// 6
//   },
// 7
//   unsubscribe(email) {
// 8
//     this.mailingList = this.mailingList.filter((e) => e !== email);
// 9
//     return `Почта ${email} удалена из рассылки.`;
// 10
//   },
// 11
// };
// 12
// ​
// 13
// function logAndInvokeAction(email, action) {
// 14
//   console.log(`Выполняем действие с ${email}.`);
// 15
//   return action(email);
// 16
// }
// 17
// ​
// 18
// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe);
// 19
// console.log(firstInvoke);
// 20
// // Почта kiwi@mail.uk добавлена в рассылку.
// 21
// ​
// 22
// console.log(service.mailingList);
// 23
// /* ['mango@mail.com',
// 24
//     'poly@hotmail.de',
// 25
//     'ajax@jmail.net',
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName(a, b) {
//     return `a${a}, b${b}, ${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer, 1, 2)); // Будет ошибка при вызове функции

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter(e => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction(
  'kiwi@mail.uk',
  service.subscribe.bind(service),
);
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction(
  'poly@hotmail.de',
  service.unsubscribe.bind(service),
);
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// https://prnt.sc/12kwddy
