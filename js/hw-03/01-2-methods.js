// /*
//  * Методы объекта и this при обращении к свойствам в методах
//  *
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
//  *
//  * - changeName
//  * - addTrack
//  * - updateRating
//  * - getTrackCount
//  */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  getNameOldSkull: function (a) {
    console.log(`getName: function (${a}) `, a);
  },
  getName(a) {
    //метод обьекта
    console.log(`getName: function (${a}) `, a);
  },
  changeName(newName) {
    console.log('this внутри changeName: ', this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist);
playlist.getName(5);
// console.log(console);
// console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');

console.log(playlist.getTrackCount());
playlist.addTrack('новый трек 1');
// console.log(playlist.getTrackCount());

console.log(playlist.getTrackCount());
playlist.addTrack('новый трек 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);
