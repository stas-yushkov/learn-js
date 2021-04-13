// logo
// Автопроверка домашних заданий по JavaScript

// Задача 28 / 36
// Модуль: 
// 1


// Скрыть задание
// Обратная связь
// ↔
// Инструкция switch c блоком default
// Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default.

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }
// Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.

// Задание
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

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
//   if (password === null) {
// 6
//     message = 'Отменено пользователем!';
// 7
//   } else if (password === ADMIN_PASSWORD) {
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
// 15
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

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;
  
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;
  
    default:
      message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}


console.log(`Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.`, checkPassword('mangohackzor'));
console.log(`Вызов checkPassword(null) возвращает 'Отменено пользователем!'.`, checkPassword(null));
console.log(`Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.`, checkPassword('polyhax'));
console.log(`Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.`, checkPassword('jqueryismyjam'));
