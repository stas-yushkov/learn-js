// // // // ///////////////////////////////////////////////////////////////
// // // // const printMessage = function (message) {
// // // //   console.log(message);
// // // // };

// // // // const higherOrderFunction = function (callback) {
// // // //   const string = 'HOCs are awesome';
// // // //   callback(string);
// // // // };

// // // // higherOrderFunction(printMessage);

// // // // ///////////////////////////////////////////////////////////////
// // // // const sum = function (a, b) {
// // // //   console.log('a + b = ', a + b);
// // // // };

// // // // const anotherHigherOrderComponent = function (someFunction) {
// // // //   const number1 = 2;
// // // //   const number2 = 3;
// // // //   someFunction(number1, number2);
// // // // };

// // // // anotherHigherOrderComponent(sum);
// // // // ///////////////////////////////////////////////////////////////
// // // // Абстрагирование повторения
// // // // for (let i = 0; i < 10; i += 1) {
// // // //   console.log(i);
// // // // }

// // // // const repeatLog = function (n) {
// // // //   for (let i = 0; i < n; i += 1) {
// // // //     console.log(i);
// // // //   }
// // // // };

// // // // repeatLog(5);

// // // const printValue = function (value) {
// // //   console.log(value);
// // // };

// // // const prettyPrint = function (value) {
// // //   console.log('Logging value: ', value);
// // // };

// // // const repeat = function (n, action) {
// // //   for (let i = 0; i < n; i += 1) {
// // //     action(i);
// // //   }
// // // };

// // // // Передаем printValue как callback-функцию
// // // repeat(3, printValue);
// // // // 0
// // // // 1
// // // // 2

// // // // Передаем prettyPrint как callback-функцию
// // // repeat(3, prettyPrint);
// // // // Logging value: 0
// // // // Logging value: 1
// // // // Logging value: 2

// // const repeat = function (n, action) {
// //   for (let i = 0; i < n; i += 1) {
// //     action(i);
// //   }
// // };

// // const labels = [];

// // repeat(5, value => {
// //   labels.push(`Label ${value + 1}`);
// // });

// // console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// // repeat(2, console.log);
// // // // ///////////////////////////////////////////////////////////////
// // Фильтрация массива

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes
// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////

// // // // ///////////////////////////////////////////////////////////////
