// const styles = ['jaz', 'bluez'];

// styles.push('rock-n-roll');

// console.log(styles);

// styles.splice(1, 1, 'classic');
// console.log(styles);

// console.log(styles.shift());
// console.log(styles);

// console.log(styles.unshift('rap', 'raggie'));
// console.log(styles);
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// function min(a,b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Args must be numbers';
//   };
//   return a>b ? b : a;
// }
// console.log(min(10,8))
// console.log(min(10,'8')) //need validation

/////////////////////////////////////////////////////////////////////////////////////////////

// const arr = ['man', 'pol', 'aja'];

// function logItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1} - ${arr[i]}`);
//   }
// }

// logItems(arr);
// //////////////////////////////////////////////////////////////////////////////////////////

// const ex4 = [2, 1, 65, 89, 20, 901, 478];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j+1]){
//         let tmp = arr[j]; //temporary storage
//         arr[j] = arr[j+1];
//         arr[j+1] = tmp;
//       }
//     }  
//   }
//   return arr;
// }

// console.table(bubbleSort(ex4));

// //////////////////////////////////////////////////////////////////////////////////////////
// const ex5 = '[104, 67, 54, 89, 2, 19]';

// const findSmallestNumber = (numbers) => {
//   if (!Array.isArray(numbers)){
//     return "Argument isn't an array";
//   } //валидировать массив 

//   let min = numbers[0];

//   for (const number of numbers) {
//     if (min > number) {
//       min = number;
//     }
//   }
//   return min;
// }

// console.log(findSmallestNumber(ex5));

//////////////////////////////////////////////////////////////////////////////////////////


// function calculateAverage(...args) {
//   // let args = arguments;
//   let sum = 0;
//   let totalCount = 0;

//   for (const arg of args) {
//     if (Array.isArray(arg)) {
//       args.splice(args.length, 0, ...arg)
//       // sum += arg;
//       // totalCount ++;
//     } else if (typeof arg !== 'number') {
//       continue;
//     } else {
//       sum += arg;
//       totalCount ++;
//     }
//   }
//   console.log('sum', sum);
//   console.log('totalCount', totalCount);
//   return sum / totalCount;
// }

// // calculateAverage(2,5,6,8,9,10);
// console.log(calculateAverage(20,'ee',10, [10,10]));  //посчитать вложенный массив 

// /////////////////////////////////////////////////////////////////////////////////////////

// function findLongestWord(randomWords) {
//   if(typeof randomWords !== 'string') {
//     return "input arg must be a 'string'";
//   }

//   const splittedWords = randomWords.split(' ');
//   console.log('splittedWords: ', splittedWords);

//   let longestWord = splittedWords[0];
//   const equalLongestWords = [];

//   for (const word of splittedWords) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   for (const word of splittedWords) {
//     if (longestWord.length === word.length) {
//       equalLongestWords.push(word);
//     }
//   }

//   if (equalLongestWords.length === splittedWords.length) {
//     return 'Length of all the words are equal to each other'
//   }
//   return `first longestWord is ${longestWord}, \n there is ${equalLongestWords.length} equalLongestWords: ${[equalLongestWords]}`;
// }

// console.log(findLongestWord('01 11 2 13')); 
//  //добавить проверку когда все слова равны. простовывести в ретурн что слова все равны
////////////////////////////////////////////////////////////////////////////////////////

// function greet(name) {
//   if (typeof name !== 'string') {
//     return 'Hello, guest'; // токо ради Жени)))
//   }
//   return name ? ` Hello, ${name}` : 'Hello, guest';
// }

// console.log(greet('Gosha'));

////////////////////////////////////////////////////////////////////////////////////


const colors = ['red','yellow', 'blue', 'green'];

function findTheColor(colorName) {
  if (typeof colorName !== 'string') {
    return "arg type must be 'string'";
  }

  if (colors.includes(colorName)) {
    return `${colorName} is founded in colors: ${colors} \nwith index: ${colors.indexOf(colorName)}`;  
  }

  return "can't find color";
  
// add indexof color of array and return in template string
}

console.log(findTheColor('yellow'));

// ////////////////////////////////////////////////////////////////////////////////////

// // function checkNumbers(a,b){
// //   if (a>b){
// //     return `number ${a} greater than ${b}`;
// //   }
// //   return `number ${b} greater than ${a}`;



// // }

// const checkNumbers = (a,b) => {
//   return a>b?  `number ${a} greater than ${b}`:  `number ${b} greater than ${a}`;
// }

///////////////////////////////////////////////////////////////////////////////////

// // // // function mult(x,y,z){
// // // //   return x*y*z;
// // // // }


// // // const mult = (x,y,z) => x*y*z;

// // const mult = (x,y,z) => (x*y*z);

// const mult = (x,y,z) => {
//   return  x*y*z;
// };
//////////////////////////////////////////////////////////////////////////////////


// const courses = ['qqq', 'wwww', 'eee eee', 'rtrt'];

// const addCourse = name => courses.push(name);

// addCourse('new fjfjfjfj');

// const removeCourse = (name) => {
//   const index = courses.indexOf(name);

//   if (index !== -1) {
//     courses.splice(index, 1);
//   }
//   return courses;
// }

// removeCourse('wwww');

// const updateCourse = (oldName, newName) => {
//   const index = courses.indexOf(oldName);

//   if(index !== -1) {
//     courses.splice(index, 1, newName);
//   }

//   return courses;


// }


// updateCourse('qqq', 'wewewewew')

// console.log(courses);
// //TODO: проверить на строку, регистр, если нету значения то вернуть строку что не сработало

//////////////////////////////////////////////////////////////////////////////////


// //declaration and expression

// x();//сработает изза hoisting
// // y();//не сработает

// //declaration
// function x() {console.log('declaration')};

// //expression

// const y = function () {console.log('expression')};

// y();//сработает после expression


//////////////////////////////////////////////////////////////////////////////////