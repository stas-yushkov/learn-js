// logo
// Автопроверка домашних заданий по JavaScript

// Задача 16 / 19
// Модуль:
// 5

// Скрыть задание
// Обратная связь
// ↔
// Статические методы
// В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, которые могут быть как публичные, так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того, что значением будет метод.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(
//   User.isEmailTaken('poly@mail.com')
// ); // false

// console.log(
//   User.isEmailTaken('mango@mail.com')
// ); // true
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

// Задание
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// Тесты
// Объявлен класс Car.
// У класса Car есть статический метод checkPrice(price).
// Вызов Car.checkPrice(36000) возвращает строку 'Всё хорошо, цена в порядке.'.
// Вызов Car.checkPrice(18000) возвращает строку 'Всё хорошо, цена в порядке.'.
// Вызов Car.checkPrice(64000) возвращает строку 'Внимание! Цена превышает допустимую.'.
// Вызов Car.checkPrice(57000) возвращает строку 'Внимание! Цена превышает допустимую.'.
// Редактор JavaScript:
// 1
// class Car {
// 2
//   static #MAX_PRICE = 50000;
// 3
//   // Пиши код ниже этой строки
// 4
// ​
// 5
//   // Пиши код выше этой строки
// 6
//   constructor({ price }) {
// 7
//     this.price = price;
// 8
//   }
// 9
// }
// 10
// ​
// 11
// const audi = new Car({ price: 36000 });
// 12
// const bmw = new Car({ price: 64000 });
// 13
// ​
// 14
// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// 15
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com')); // false

// console.log(User.isEmailTaken('mango@mail.com')); // true

// Нехай r – цілочисельний радіус кола, a,b – цілочисельні довжини сторін
// прямокутника, центр якого збігається з центром кола.
// Видати повідомлення «Прямокутник вписано», якщо він розміщений в колі, і
// «Прямокутник не вписано», якщо він не має спільних точок з колом.

const radius = 65;
const aSide = 120;
const bSide = 51;
const digitsAfterTheDot = 0;

const isRectangleInscribedInACircle = (
  radius,
  aSide,
  bSide,
  digitsAfterTheDot,
) => {
  const diagonal = parseFloat(
    Math.sqrt(aSide * aSide + bSide * bSide).toFixed(digitsAfterTheDot),
  );

  if (2 * radius === diagonal) {
    console.log('Прямокутник вписано');
    return;
  }

  console.log('Прямокутник не вписано');
};

isRectangleInscribedInACircle(radius, aSide, bSide, digitsAfterTheDot);

// Rounding numbers with decimal precision requires a little bit of calculation and Math.round(). Optionally we can use the toFixed() method that belongs to the Number prototype. The output type of toFixed() is a string which needs to be passed to a top-level function called parseFloat() to return a number.
// Округлення чисел з десятковою точністю вимагає трохи обчислення та Math.round (). За бажанням ми можемо використовувати метод toFixed (), який належить прототипу Number. Тип виводу toFixed () - це рядок, який потрібно передати функції верхнього рівня, що називається parseFloat (), щоб повернути число.

// https://prnt.sc/1362zqr
// https://pawelgrzybek.com/rounding-and-truncating-numbers-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
