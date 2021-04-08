"use strict"

console.log("2.1. Number");
console.log("Целые числа и числа с плавающей запятой. После объявления переменной, можно инициализировать ее числовым значением." ,"\n","\n");
const age = 20;
const number = 5.8;

console.log("2.2. String");
console.log("Строки - это просто текст, последовательность из нуля или более символов. Строка начинается и заканчивается одиночной \' или двойными кавычками \". Открывающая и закрывающая кавычки должны быть одинаковые." ,"\n","\n");
const fruitName = 'Mango';

console.log("// 2.3. Boolean");
console.log("// Логический тип данных, флаги состояния. Имеет только два значения: true и false, в нижнем регистре. Например на вопрос включен ли свет в комнате можно ответить да (true) или нет (false).");
console.log("// true — да, верно, истина, 1");
console.log("// false — нет, неверно, ложь, 0");
console.log("// Обратите внимание на имена переменных содержащих буль. Они задают вопрос, и ответ на его — да или нет." ,"\n","\n");

const isAuthenticated = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;


console.log("// 2.4. null");
console.log("// Особое значение, которое по сути значит ничто. Используется в тех ситуациях, когда необходимо явно указать отсутсвие значения. К примеру если в базе данных не нашли пользователя, то можно сказать что значение null.");
console.log("// Переменная guest пуста и лишена значения" ,"\n","\n");

const guest = null;

console.log("// 2.5. undefined")
console.log("// Еще одно специальное значение. По умолчанию, когда переменная объявляется, но не инициализируется, ее значение не определено, ей присваивается undefined.");

let someName;
console.log(someName ,"\n","\n"); // undefined

console.log("// 2.6. Оператор typeof")
console.log("// Для получения типа значения переменной, используется оператор typeof, который возвращает на место своего вызова тип значения переменной указанного после него. Возвращаемое значение это просто строка в которой указан тип." ,"\n","\n");

console.log("// undefined");
let a;
console.log(typeof a ,"\n","\n"); // "undefined"


console.log("// null");
const b = null;
console.log(typeof null ,"\n","\n"); // "object"

console.log("// Number");
const c = 5;
console.log(typeof c ,"\n","\n"); // "number"


console.log("// String");
const d = 'JavaScript is awesome!';
console.log(typeof d ,"\n","\n"); // "string"

console.log("// Boolean");
const e = false;
console.log(typeof e); // "boolean"
