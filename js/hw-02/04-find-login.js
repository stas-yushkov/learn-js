// /*
//  * Напиши скрипт поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
//  *
//  * - Сначала через for
//  * - Потом через for...of
//  * - Логика break
//  * - Метод includes() с тернарным оператором
//  */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';
// // let message = `Пользователь ${loginToFind} не найден.`; // изначально не найден, но если найдем, напишем что найден

// // for (let i = 0; i < logins.length; i += 1) {
// //   const login = logins[i];

// //   // console.log('Login: ', login);
// //   // console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// //   if (login === loginToFind) {
// //     // console.log('Ура, равны!!!');
// //     message = `Пользователь ${loginToFind} найден.`;
// //     break;
// //   }
// // }

// // console.log(message);

// // for (const login of logins) {
// //   console.log('Login: ', login);
// //   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// //   if (login === loginToFind) {
// //     console.log('Ура, равны!!!');
// //     message = `Пользователь ${loginToFind} найден.`;
// //     break;
// //   }
// // }

// // console.log(message);

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);


/////////////////////////////////////////////////////

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }

//   return `Пользователь ${loginToFind} не найден.`;
// };

const findLogin = function (allLogins, loginToFind) {
  // console.log(allLogins);
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Ошибочка... Пользователь ${loginToFind} не найден.`;
};
 
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));