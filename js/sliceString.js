// my first function)))
// slice string to column in console
function sliceString(message) {
  console.log("message", message)
  console.log("message length", message.length)
  let counter = 0;

  while (counter < message.length) {
    // console.log('counter: ', counter);
    // console.log('word:    ', message.slice((message.length - message.length + counter), (message.length - message.length + 1 + counter)));
    console.log('       ', message.slice((message.length - message.length + counter), (message.length - message.length + 1 + counter)));
    counter += 1;
  }
  return 'смотри консоль'
}

sliceString('1wer5 7u9')