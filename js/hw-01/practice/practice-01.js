// https://prnt.sc/11gn9gb

// let qq ;
// console.log(typeof "qdfgvb")
// console.log(typeof 123)
// console.log(typeof false)
// console.log(typeof null)
// console.log(typeof qq)



// const apples = 47;
// const grapes = 135;
// const result = apples + grapes;
// console.log(result);



// let result1 = 108 + 223 - 2 * 5;
// console.log(result1);



// let radius = 10;
// const sqr = Math.PI * Math.pow(radius, 2)
// console.log(sqr);

// const A = "Ashot";
// const B = 28;
// const C = "play football"
// const message = `hello, my name is ${A}, 
// I am ${B} years old 
// and\nI like ${C}`
// console.log(message);


// console.log(5 > 4);//true
// console.log(10>="7");//true
// console.log(6>="7");//f

// console.log("2">"12");//t сравнение посимвольно. первый символ 2 ббольше первого символа 12(1) строки преобразованы через коды ASCII
// console.log("2".charCodeAt(0));//50
// console.log("1".charCodeAt(0));//49
// console.log("12".charCodeAt(0));//49

// console.log('2'<'12');//f
// console.log("4" == 4);//t
// console.log("6" === 6);//f
// console.log('false' === false);//f
// console.log(1 ==true);//t
// console.log(1 === true);//f
// console.log('0' == false);//t
// console.log("0"=== false);//f
// console.log("Ёнанас" < "ёжик");//t
// console.log("Ёнанас".charCodeAt(0));//1025
// console.log("ёжик".charCodeAt(0)); //1105    просто заглавная буква меньше чем строчная по ASCII
// console.log("Ёнанас" === "ёжик");//f
// console.log(undefined == null);//t
// console.log(undefined === null);//f


// console.log("н".charCodeAt(0));//1085
// console.log("ж".charCodeAt(0));//1078


// const question = prompt('какое офф название js ?');
// console.log('ваш ответ', question);
// if (question === "ECMAScript") {
//   console.log("верно")
// } else {
//   console.log("не знаете? ECMAScript")
// }



// const a = 1;
// const b = 2;
// let result;
// // if (a +b < 4) {
// //   result = "мало";
// // } else {
// //   result = "много";
// // }
// a + b < 4 ? (result = "мало") : (result = "много");
// console.log(result);



// console.log(true && 3 && 5 && true && "rrr");//rrr
// console.log(true && 3 && null && true && "rrr");//null
// console.log(false && 3);//false
// console.log(3 && 4&& 'hello');//hello
// console.log(true && 0 && "hello");//0
// console.log(true || 3);//true
// console.log(true || 3 ||4);//true
// console.log(true ||false ||7);//true
// console.log(null || 2 || undefined);//2
// console.log((1 && null && 2) > 0);//f
// console.log((1 && null && 2) );//null
// console.log( null > 0);//f
// console.log(null || (2 && 3) ||4);//3


// написать условие if  для проверки что переменная age находится в диапазоне между 14 и 90 включительно
// const min = 14;
// const max = 90;
// let age = 27;
// if (age >= min && age <= max) {
//   console.log('верно');
// } else {
//   console.log('лажа');
// }

// написать программу которая получит от пользователя число (колво минут) и выведет на экран строку в формате часов и минут
// пример 70 покажет 01:10
// const globalMinutes = 61;
// const hours = Math.floor(globalMinutes / 60);
// const minutes = globalMinutes % 60;
// console.log(minutes);
// console.log(hours);
// const  modifiedHours = String(hours).padStart(2,0);
// console.log(modifiedHours);
// const  modifiedMinutes = String(minutes).padStart(2,0);
// console.log(modifiedMinutes);
// const time  = `${modifiedHours}:${modifiedMinutes}`;
// console.log(time);
// https://prnt.sc/11gmyre




// const min1 = 10;
// const max1 = 100;

// for (let i = min1; i <= max1; i++) {
//   console.log(i);
// }

// for (let i = max1; i >= min1; i--) {
//   console.log(i);
// }




// четные числа
// const num1 = 2;
// const num2 = 10;

// // for (let i = num1; i <= num2; i++) {
// //   if (i % 2 === 0) {
// //     console.log(i);
// //   }
// // }//етот способ лучше

// for (let i = num1; i <= num2; i += 2) {
//   console.log(i);
// }



//https://prnt.sc/11gny3y
let input = prompt('введи число больше 100');
let check = false;
do {
  if (Number(input) < 100) {
    check = true;
    input = prompt('введи число больше 100')
  } else {
    check = false;
  }
} while (check); // добавить проверку на null  и что введенное значение цифра.



// https://prnt.sc/11go8he
// const  loginInput = prompt('введи свой логин');
// if (loginInput === 'Админ') {
//   const passwordInput = prompt('введи пароль');
//   if (passwordInput) {
//     if (passwordInput === 'Я_главный') {
//       console.log('здоров');
//     } else {
//       console.log('invalid pass');
//     }
//   } else {
//     console.log('отменено');
//   }
// } else {
//   console.log('я вас не знаю');
// }
// 


      




// // https://prnt.sc/11gorqa
// let inputValue = prompt('введи число');
// let total = 0;
// let check = false;
// do {
//   if (inputValue) {
//     check = true;
//     total += Number(inputValue);
//     inputValue = prompt('введи число');
//   } else {
//     check = false;
//     alert(`общая сумма чисел равна ${total}`);
//   }
// } while (inputValue)//https://prnt.sc/11gpheb не успел набрать



// console.log(indexOf());
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();


