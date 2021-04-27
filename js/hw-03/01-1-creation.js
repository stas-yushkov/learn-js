/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const playlist = {
//   name: 'my playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

playlist.newProp = 5;

playlist.rating = 10;

// console.log(playlist);

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

const propertyName = 'tracks';

// console.log(playlist.rating);//5
// console.log(playlist['rating']);//5

// console.log(playlist.propertyName); //undefined
// console.log(playlist[propertyName]); //['трек-1', 'трек-2', 'трек-3']

// console.log(playlist);
/*
 * Короткая запись свойств
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
}; // новая запись ES6

const qweqwe = {
  username: username,
  email: email,
}; //старая запись ES5

// console.log(signupData);
// console.log(qweqwe);

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';
const someName = 'azaza';
const someValue = 'value HZ';

const colorPickerData = {
  [inputName]: inputValue,
  [someName]: someValue,
};

// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });//f
// console.log([] === []); //f

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a); //t

// a.hello = 100;
// b.hello = 150;

// a.c = 100;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */

const a = [1, 2, 3];

a.hello = ':)';
a[3] = 4;

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.log(fn);
// console.dir(fn);
