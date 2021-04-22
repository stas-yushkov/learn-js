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
// const ex5 = [104, 67, 54, 89, 2, 19];

// function findSmallestNumber(numbers) {
//   if (typeof numbers !== "array"){
//     return;
//   } //валидировать массив TODO:  //валидировать массив 

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


function calculateAverage() {
  const args = arguments;
  let sum = 0;
  let totalCount = 0;

  for (const arg of args) {
    if (typeof arg !== 'number') {
      continue;
    } else {
      sum += arg;
      totalCount ++;
    }
  }
  return sum / totalCount;
}

calculateAverage(2,5,6,8,9,10);
console.log(calculateAverage(20,'ee',10));

/////////////////////////////////////////////////////////////////////////////////////////