// logo
// Автопроверка домашних заданий по JavaScript

// Задача 6 / 10
// Модуль:
// 4

// Скрыть задание
// Обратная связь
// ↔
// Задача. Аккаунт пользователя
// Задание
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлена переменная customer.
// Значение переменной customer это объект со свойствами и методами.
// Вызов customer.getDiscount() возвращает текущее значение свойства discount.
// Вызов customer.setDiscount(0.15) обновляет значение свойства discount.
// Вызов customer.getBalance() возвращает текущее значение свойства balance.
// Вызов customer.getOrders() возвращает текущее значение свойства orders.
// Вызов customer.addOrder(5000, 'Steak') добавляет 'Steak' в массив значений свойства orders и обновляет баланс.
// Метод getBalance объекта customer использует this.
// Метод getDiscount объекта customer использует this.
// Метод setDiscount объекта customer использует this.
// Метод getOrders объекта customer использует this.
// Метод addOrder объекта customer использует this.
// Редактор JavaScript:
// 1
// const customer = {
// 2
//   username: 'Mango',
// 3
//   balance: 24000,
// 4
//   discount: 0.1,
// 5
//   orders: ['Burger', 'Pizza', 'Salad'],
// 6
//   // Пиши код ниже этой строки
// 7
//   getBalance() {
// 8
//     return balance;
// 9
//   },
// 10
//   getDiscount() {
// 11
//     return discount;
// 12
//   },
// 13
//   setDiscount(value) {
// 14
//     discount = value;
// 15
//   },
// 16
//   getOrders() {
// 17
//     return orders;
// 18
//   },
// 19
//   addOrder(cost, order) {
// 20
//     balance -= cost - cost * discount;
// 21
//     orders.push(order);
// 22
//   },
// 23
//   // Пиши код выше этой строки
// 24
// };
// 25
// ​
// 26
// customer.setDiscount(0.15);
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
