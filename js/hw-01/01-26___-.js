// logo
// Автопроверка домашних заданий по JavaScript

// Задача 26 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Задача: проверка пароля
// Задание
// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// В противном случае, присвой message строку 'Доступ запрещен, неверный пароль!'.
// Тесты
// Объявлена функция checkPassword(password).
// Использован тернарный оператор.
// Вызов checkPassword('jqueryismyjam') возвращает 'Доступ разрешен'.
// Вызов checkPassword('angul4r1sl1f3') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('r3actsux') возвращает 'Доступ запрещен, неверный пароль!'.
// Редактор JavaScript:
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Пиши код ниже этой строки

//   // Пиши код выше этой строки
//   return message;
// }
// 1
// function checkPassword(password) {
// 2
//   const ADMIN_PASSWORD = 'jqueryismyjam';
// 3
//   let message;
// 4
//   // Пиши код ниже этой строки
// 5
// ​
// 6
//   // Пиши код выше этой строки
// 7
//   return message;
// 8
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
  // Пиши код ниже этой строки
  message = password === ADMIN_PASSWORD ?  'Доступ разрешен' :  'Доступ запрещен, неверный пароль!' ;
  // Пиши код выше этой строки
  return message;
}

console.log(`Вызов checkPassword('jqueryismyjam') возвращает 'Доступ разрешен'.`, checkPassword('jqueryismyjam'));
console.log(`Вызов checkPassword('angul4r1sl1f3') возвращает 'Доступ запрещен, неверный пароль!'.`, checkPassword('angul4r1sl1f3'));
console.log(`Вызов checkPassword('r3actsux') возвращает 'Доступ запрещен, неверный пароль!'.`, checkPassword('r3actsux'));
