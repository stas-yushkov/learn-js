/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  author: 'me',
};

// const { name, rating, tracks, trackCount, author = 'somebody' } = playlist; //деструктуризация
// console.log(name, rating, tracks, trackCount, author);

// console.log(
//   playlist.name,
//   playlist.rating,
//   playlist.tracks,
//   playlist.trackCount,
// );

// const { rating, tracks, tracks111 } = playlist;
// console.log(rating);
// console.log(tracks);
// console.log(tracks111); //undefined

// const {
//   rating,
//   tracks,
//   name,
//   trackCount: numberOfTracks = 0,
//   author = 'user',
// } = playlist;

// console.log(numberOfTracks);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { avatar, name, tag, location, stats } = profile;

// const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, followers, views, likes);

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// console.log(
//   name,
//   '\n',
//   tag,
//   '\n',
//   location,
//   '\n',
//   avatar,
//   '\n',
//   followers,
//   '\n',
//   views,
//   '\n',
//   likes,
// );

/*
 * Деструктуризация массивов
 */

const rgb = [255, 100, 80];

const [red, , blue] = rgb;

// console.log(red, blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

// console.log(entries);

// for (const entry of entries) {
//   console.log(entry);
// }

// for (const entry of entries) {
//   const [name, rating] = entry;
//   console.log(name, rating);
// }

// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }
// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;

//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location } = profile;

// const restProps = {
//   avatar: profile.avatar,
//   stats: profile.stats,
// };

// // const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// // console.log(profile);

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;

  // console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);
