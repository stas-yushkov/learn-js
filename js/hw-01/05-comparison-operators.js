/*
 * Операторы сравнения
 */

console.log(15 < 3);

/*
 * Приведение (преобразование) типов к числу
 */

console.log('10' > 5);

/*
 * Операторы равенства (== и ===) и неравества (!= и !==)
 * ✅ «ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) и НЕРАВЕНСТВО (!==)»
 */

const isEqual = 1 === true;

console.log(isEqual);

// while (expression) {
//   // код, тело цикла (statement)
// }

// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// function sliceString(message) {
//   console.log("message", message)
//   console.log("message length", message.length)
//   let counter = 0;

//   while (counter < message.length) {
//     // console.log('counter: ', counter);
//     // console.log('word:    ', message.slice((message.length - message.length + counter), (message.length - message.length + 1 + counter)));
//     console.log('       ', message.slice((message.length - message.length + counter), (message.length - message.length + 1 + counter)));
//     counter += 1;
//   }
//   return 'смотри консоль'
// }

// sliceString('1wer5 7u9')