// logo
// Автопроверка домашних заданий по JavaScript

// Задача 19 / 19
// Модуль:
// 5

// Скрыть задание
// Обратная связь
// ↔
// Методы дочернего класса
// В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

// // Представим что выше есть объявление класса User

// class ContentWriter extends User {
//   posts;

//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
// console.log(writer); // { email: 'mango@mail.com', posts: [] }
// console.log(writer.email); // 'mango@mail.com'
// writer.addPost('post-1');
// console.log(writer.posts); // ['post-1']
// Задание
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Admin.
// Класс Admin наследует от класса User.
// У класса Admin есть публичное свойство blacklistedEmails.
// У класса Admin есть публичный метод blacklist.
// У класса Admin есть публичный метод isBlacklisted.
// После вызова mango.blacklist('poly@mail.com') значение свойства blacklistedEmails это массив [ 'poly@mail.com' ].
// Вызов mango.isBlacklisted('mango@mail.com') возвращает false.
// Вызов mango.isBlacklisted('poly@mail.com') возвращает true.
// Редактор JavaScript:
// 1
// class User {
// 2
//   email;
// 3
// ​
// 4
//   constructor(email) {
// 5
//     this.email = email;
// 6
//   }
// 7
// ​
// 8
//   get email() {
// 9
//     return this.email;
// 10
//   }
// 11
// ​
// 12
//   set email(newEmail) {
// 13
//     this.email = newEmail;
// 14
//   }
// 15
// }
// 16
// class Admin extends User {
// 17
//   // Пиши код ниже этой строки
// 18
// ​
// 19
//   static AccessLevel = {
// 20
//     BASIC: 'basic',
// 21
//     SUPERUSER: 'superuser'
// 22
//   };
// 23
// ​
// 24
//   accessLevel;
// 25
// ​
// 26
//   constructor({ email, accessLevel }) {
// 27
//     super(email);
// 28
//     this.accessLevel = accessLevel;
// 29
//   }
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  blacklistedEmails = [];

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  accessLevel;

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true

// https://prnt.sc/136q1zc
