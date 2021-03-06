// logo
// Автопроверка домашних заданий по JavaScript

// Задача 19 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Блок else...if
// Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.

// let cost;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
// Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.

// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log(`Невалидный тип подписки ${subscription}`);
// }

// console.log(cost); // 500
// При первом же удовлетворяющем условии проверки прекратятся и выполнится только тело соответствующего блока if. Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное».

// Задание
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.
// Редактор JavaScript:
// 1
// function checkPassword(password) {
// 2
//   const ADMIN_PASSWORD = 'jqueryismyjam';
// 3
//   let message;
// 4
// ​
// 5
//   if () { // Дополни эту строку
// 6
//     message =  'Отменено пользователем!';
// 7
//   } else if () { // Дополни эту строку
// 8
//     message = 'Добро пожаловать!';
// 9
//   } else {
// 10
//     message = 'Доступ запрещен, неверный пароль!';
// 11
//   }
// 12
// ​
// 13
//   return message;
// 14
// }
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |
// Политика конфиденциальности


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

console.log(null, checkPassword(null));
console.log('polyhax', checkPassword('polyhax'));
console.log('jqueryismyjam', checkPassword('jqueryismyjam'));
