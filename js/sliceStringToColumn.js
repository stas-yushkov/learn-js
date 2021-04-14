// my first function)))
// slice string to column in console
function sliceStringToColumn(message) {
  console.log("message:       ", message)
  console.log("message length:", message.length)
  // let i = 0;

  // while (i < message.length) {
  //   // console.log('i: ', i);
  //   // console.log('word:    ', message.slice((message.length - message.length + i), (message.length - message.length + 1 + i)));
  //   console.log('       ', message.slice((message.length - message.length + i), (message.length - message.length + 1 + i)));
  //   i += 1;
  // }

  for (let i = 0; i < message.length; i+=1) {
    console.log('               ', message.slice((message.length - message.length + i), (message.length - message.length + 1 + i)));
    
  }
  return 'смотри консоль'
}

sliceStringToColumn('1wer5 7u9')

function sliceStringToColumnRewerse(message) {
  console.log("message:       ", message)
  console.log("message length:", message.length)

  for (let i = message.length; i >= 0; i -= 1) {
    
    console.log('               ', message.slice((message.length - message.length + i), (message.length - message.length + 1 + i)));
    // console.log(i);
  }
  return 'смотри консоль'
}

sliceStringToColumnRewerse('1wer5 7u9')