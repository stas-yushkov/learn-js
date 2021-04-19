// // // 7 kyu
// // // Highest and Lowest
// // // 139931490% of 13,84045,187 of 118,778Deantwo
// // // JavaScript
// // // TRAIN AGAINNEXT KATA
// // // Details
// // // Solutions
// // // Forks (64)
// // // Discourse (583)
// // // Collect|
// // // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// // // Example:

// // // highAndLow("1 2 3 4 5");  // return "5 1"
// // // highAndLow("1 2 -3 4 5"); // return "5 -3"
// // // highAndLow("1 9 3 4 -5"); // return "9 -5"
// // // Notes:

// // // All numbers are valid Int32, no need to validate them.
// // // There will always be at least one number in the input string.
// // // Output string must be two numbers separated by a single space, and highest number is first.
// // // FUNDAMENTALSSTRINGS

// // Kata

// // Dashboard
// // Kata
// // Docs
// // Blog
// // Kumite
// // Forum
// // Leaders

// // 8 kyu
// // 7
// // 7 kyu
// // Highest and Lowest
// // 139931490% of 13,84045,187 of 118,778Deantwo
// // JavaScript
// // TRAIN AGAINNEXT KATA
// // Details
// // Solutions
// // Forks (64)
// // Discourse (583)
// // Collect|
// // How satisfied are you with this kata?VERYSOMEWHATNONE
// // Show Kata Description
// // Show Kata Test Cases
// // Show Me:
// // All Solutions
// // Solutions of Users I am FollowingMy Solutions
// // Sort By:
// // Best Practices
// // CleverNewestOldest
// // colbydauph, user961507, parekeet, foxi200, TomClive, JawBreakerHunterMan, elliottmck, leetown, Dubdjon8, amiteshr179, 32penkin (plus 204 more warriors)
// // function highAndLow(numbers){
// //   numbers = numbers.split(' ').map(Number);
// //   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// // }
// // 78 similar code variations are grouped with this oneShow Variations

// // Best Practices564Clever453
// // 432ForkCompare with your solutionLink
// // colbydauph, scooper91, Coh1bAAAA, notbogdan, yuluyi, likewinter, lchewy, syahn, user7768876, Paradzayi, eladgilboa (plus 96 more warriors)
// // function highAndLow(numbers){
// //   numbers = numbers.split(' ');
// //   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// // }
// // 50 similar code variations are grouped with this oneShow Variations

// // Best Practices380Clever480
// // 131ForkCompare with your solutionLink
// // MariaO, robbieferrero, user7685752, Clarity, GaspardP, CarpeDN, Sophia, Impik, Jenik, coolsword (plus 72 more warriors)
// // function highAndLow(numbers) {
// //   var arr = numbers.split(" ");
// //   return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
// // }
// // 59 similar code variations are grouped with this oneShow Variations

// // Best Practices62Clever36
// // 2ForkCompare with your solutionLink
// // Vidmas, maxweldsouza, migzican, Viktor1993, julian-Durdur, salutdodo, mmacej, mornemira, ai-wintermute, Yurii-p (plus 9 more warriors)
// // function highAndLow(numbers){
// //   let arr = numbers.split(' ').map(Number);  
// //   return Math.max(...arr) + ' ' + Math.min(...arr);
// // }
// // 10 similar code variations are grouped with this oneShow Variations

// // Best Practices51Clever31
// // 1ForkCompare with your solutionLink
// // ButuzGOL, patronics, adiek, timrobertson0122, sixtyh8, wade, jithinr77, th0ma5_ander50n, georgeweiler, Plombir (plus 38 more warriors)
// // function highAndLow(numbers){
// //   var arr = numbers.split(' ').sort(function(a, b) { return a - b });
// //   return arr[arr.length -1] + ' ' + arr[0];
// // }
// // 45 similar code variations are grouped with this oneShow Variations

// // Best Practices41Clever70
// // 4ForkCompare with your solutionLink
// // ooflorent, witoldolszyk@gmail.com, babel2008, asiajez, maciejkedzierski, Paula991, yousriMA (plus 1 more warriors)
// // function highAndLow(numbers) {
// //   numbers = numbers.split(' ').map(Number)
  
// //   var min = Math.min.apply(null, numbers)
// //   var max = Math.max.apply(null, numbers)
  
// //   return max + ' ' + min
// // }
// // 5 similar code variations are grouped with this oneShow Variations

// // Best Practices40Clever14
// // 2ForkCompare with your solutionLink
// // andorey
// // // tast for 55 sec
// // function highAndLow(numbers){
// //   numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
// //   return [numbers[numbers.length-1], numbers[0]].join(' ')
// // }
// // Best Practices38Clever0
// // 0ForkCompare with your solutionLink
// // AmanpreetHundal, chrisedo5, fdo2, bakewka
// // function highAndLow(numbers){

// // var numArray = numbers.split(" ");
// // var max      = Number(numArray[0]);
// // var min      = Number(numArray[0]);
// // var num;

// // for(var i = 1; i< numArray.length; i++){

// //   num = Number(numArray[i]);
  
// //   if(num > max) max = num;
// //   if(num < min) min = num;
// // }

// // return max + " " + min;

// // }
// // 1 similar code variation is grouped with this oneShow Variations

// // Best Practices32Clever10
// // 5ForkCompare with your solutionLink
// // rowanmanning
// // function highAndLow(numbers) {
// //   numbers = numbers.split(' ').map(Number);
// //   const max = Math.max(...numbers);
// //   const min = Math.min(...numbers);
// //   return `${max} ${min}`;
// // }
// // 1 similar code variation is grouped with this oneShow Variations

// // Best Practices20Clever18
// // 0ForkCompare with your solutionLink
// // cslansing, 121GigaWatts, Henkraks, whoever112211, jamesoh, Ulisses, hackmenate, rohanb10, jpmc, Merkoes91 (plus 172 more warriors)
// // function highAndLow(numbers){
// //   numbers = numbers.split(' ');
  
// //   return Math.max(...numbers) + ' ' + Math.min(...numbers);
// // }
// // 110 similar code variations are grouped with this oneShow Variations

// // Best Practices15Clever8
// // 0ForkCompare with your solutionLink
// // Loading more solutions...
// // © 2021 CodewarsAboutAPIBlogPrivacyTermsContact
// // powered by


// Kata

// Dashboard
// Kata
// Docs
// Blog
// Kumite
// Forum
// Leaders

// 8 kyu
// 7
// 7 kyu
// Highest and Lowest
// 139931490% of 13,84045,187 of 118,778Deantwo
// JavaScript
// TRAIN AGAINNEXT KATA
// Details
// Solutions
// Forks (64)
// Discourse (583)
// Collect|
// How satisfied are you with this kata?VERYSOMEWHATNONE
// Show Kata Description
// Show Kata Test Cases
// Show Me:
// All Solutions
// Solutions of Users I am FollowingMy Solutions
// Sort By:
// Best Practices
// CleverNewestOldest
// colbydauph, user961507, parekeet, foxi200, TomClive, JawBreakerHunterMan, elliottmck, leetown, Dubdjon8, amiteshr179, 32penkin (plus 204 more warriors)
// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
// 78 similar code variations are grouped with this oneShow Variations

// Best Practices564Clever453
// 432ForkCompare with your solutionLink
// colbydauph, scooper91, Coh1bAAAA, notbogdan, yuluyi, likewinter, lchewy, syahn, user7768876, Paradzayi, eladgilboa (plus 96 more warriors)
// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
// 50 similar code variations are grouped with this oneShow Variations

// Best Practices380Clever480
// 131ForkCompare with your solutionLink
// MariaO, robbieferrero, user7685752, Clarity, GaspardP, CarpeDN, Sophia, Impik, Jenik, coolsword (plus 72 more warriors)
// function highAndLow(numbers) {
//   var arr = numbers.split(" ");
//   return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
// }
// 59 similar code variations are grouped with this oneShow Variations

// Best Practices62Clever36
// 2ForkCompare with your solutionLink
// Vidmas, maxweldsouza, migzican, Viktor1993, julian-Durdur, salutdodo, mmacej, mornemira, ai-wintermute, Yurii-p (plus 9 more warriors)
// function highAndLow(numbers){
//   let arr = numbers.split(' ').map(Number);  
//   return Math.max(...arr) + ' ' + Math.min(...arr);
// }
// 10 similar code variations are grouped with this oneShow Variations

// Best Practices51Clever31
// 1ForkCompare with your solutionLink
// ButuzGOL, patronics, adiek, timrobertson0122, sixtyh8, wade, jithinr77, th0ma5_ander50n, georgeweiler, Plombir (plus 38 more warriors)
// function highAndLow(numbers){
//   var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//   return arr[arr.length -1] + ' ' + arr[0];
// }
// 45 similar code variations are grouped with this oneShow Variations

// Best Practices41Clever70
// 4ForkCompare with your solutionLink
// ooflorent, witoldolszyk@gmail.com, babel2008, asiajez, maciejkedzierski, Paula991, yousriMA (plus 1 more warriors)
// function highAndLow(numbers) {
//   numbers = numbers.split(' ').map(Number)
  
//   var min = Math.min.apply(null, numbers)
//   var max = Math.max.apply(null, numbers)
  
//   return max + ' ' + min
// }
// 5 similar code variations are grouped with this oneShow Variations

// Best Practices40Clever14
// 2ForkCompare with your solutionLink
// andorey
// // tast for 55 sec
// function highAndLow(numbers){
//   numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
//   return [numbers[numbers.length-1], numbers[0]].join(' ')
// }
// Best Practices38Clever0
// 0ForkCompare with your solutionLink
// AmanpreetHundal, chrisedo5, fdo2, bakewka
// function highAndLow(numbers){

// var numArray = numbers.split(" ");
// var max      = Number(numArray[0]);
// var min      = Number(numArray[0]);
// var num;

// for(var i = 1; i< numArray.length; i++){

//   num = Number(numArray[i]);
  
//   if(num > max) max = num;
//   if(num < min) min = num;
// }

// return max + " " + min;

// }
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices32Clever10
// 5ForkCompare with your solutionLink
// rowanmanning
// function highAndLow(numbers) {
//   numbers = numbers.split(' ').map(Number);
//   const max = Math.max(...numbers);
//   const min = Math.min(...numbers);
//   return `${max} ${min}`;
// }
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices20Clever18
// 0ForkCompare with your solutionLink
// cslansing, 121GigaWatts, Henkraks, whoever112211, jamesoh, Ulisses, hackmenate, rohanb10, jpmc, Merkoes91 (plus 172 more warriors)
// function highAndLow(numbers){
//   numbers = numbers.split(' ');
  
//   return Math.max(...numbers) + ' ' + Math.min(...numbers);
// }
// 110 similar code variations are grouped with this oneShow Variations

// Best Practices15Clever8
// 0ForkCompare with your solutionLink
// artifex404
// function highAndLow(numbers) {
//   var low, high, data = numbers.split(" ");
//   for (var i = 0, length = data.length; i < length; i++) {
//     var num = +data[i];
//     if (low === undefined || num < low) low = num;
//     if (high === undefined || num > high) high = num;
//   }
//   return high + " " + low;
// }
// Best Practices14Clever2
// 1ForkCompare with your solutionLink
// user934231, Mohhaj
// function highAndLow(numbers){
//   var arr = numbers.split(" ").map( (x) => parseInt(x) );
//   var max = arr.reduce((p, c) => p > c ? p : c );
//   var min = arr.reduce((p, c) => p < c ? p : c );
//   return max+" "+min;
// }
// Best Practices6Clever1
// 0ForkCompare with your solutionLink
// tthilo, marko.bojic021, samuelcar, nredla2, ohmoses, cevaris, kdmrulez, Duke90, hedgehog300
// function highAndLow(numbers){
//   var numArray = numbers.split(" ");
//   return Math.max.apply(null, numArray) + " " +  Math.min.apply(null, numArray);
// }
// 7 similar code variations are grouped with this oneShow Variations

// Best Practices4Clever3
// 0ForkCompare with your solutionLink
// danielstaleiny
// function highAndLow(numbers){
//   const ar = numbers.split(' ');
//   return `${Math.max(...ar)} ${Math.min(...ar)}`
// }
// Best Practices4Clever0
// 0ForkCompare with your solutionLink
// kinludar, Rahul_Raviprasad, eli88p
// function highAndLow(numbers){
//   // ...
// return Math.max.apply(null, numbers.match(/-?\d+/g)) + 
// " " + Math.min.apply(null, numbers.match(/-?\d+/g));
// }
// 3 similar code variations are grouped with this oneShow Variations

// Best Practices3Clever12
// 0ForkCompare with your solutionLink
// colbydauph
// const { min, max } = Math;

// const highAndLow = (numbers) => {
//   numbers = numbers.split(' ');
//   return `${ max(...numbers) } ${ min(...numbers) }`;
// };
// Best Practices3Clever3
// 0ForkCompare with your solutionLink
// deneb, bryantt23, MatamorosF3, GCa, cdearden, zacharydylan, alonzoalden, bbasti, YurijPaharev, kozlowski (plus 260 more warriors)
// function highAndLow(numbers){
//   return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
// }
// 118 similar code variations are grouped with this oneShow Variations

// Best Practices3Clever2
// 0ForkCompare with your solutionLink
// ihsasum
// function highAndLow(numbers){
//   // ... highs and lows - kid cudi needs to be on repeat to complete this kata
//   let numberArray = numbers.split(" ");
//   let min = Math.min(...numberArray);
//   let max = Math.max(...numberArray);
//   return max + " " + min;
  
// }
// Best Practices3Clever1
// 0ForkCompare with your solutionLink
// JWLF, nicoleesposo, istianreid
// function highAndLow(numbers){
//   var sorted = numbers.split(' ').sort(function(a, b){return a - b});
//   return sorted.slice(-1)[0] + ' ' + sorted[0];
// }
// Best Practices3Clever1
// 1ForkCompare with your solutionLink
// FranchBaron
// function highAndLow(numbers){
//   const array = [...numbers.split(' ').map(Number)];
//   return `${Math.max(...array)} ${Math.min(...array)}`;
// }
// Best Practices3Clever0
// 0ForkCompare with your solutionLink
// artifex404
// function highAndLow(numbers) {
//   var low, high, data = numbers.split(" ");
//   for (var i = 0, length = data.length; i < length; i++) {
//     var num = +data[i];
//     if (low === undefined || num < low) low = num;
//     if (high === undefined || num > high) high = num;
//   }
//   return high + " " + low;
// }
// Best Practices14Clever2
// 1ForkCompare with your solutionLink
// user934231, Mohhaj
// function highAndLow(numbers){
//   var arr = numbers.split(" ").map( (x) => parseInt(x) );
//   var max = arr.reduce((p, c) => p > c ? p : c );
//   var min = arr.reduce((p, c) => p < c ? p : c );
//   return max+" "+min;
// }
// Best Practices6Clever1
// 0ForkCompare with your solutionLink
// tthilo, marko.bojic021, samuelcar, nredla2, ohmoses, cevaris, kdmrulez, Duke90, hedgehog300
// function highAndLow(numbers){
//   var numArray = numbers.split(" ");
//   return Math.max.apply(null, numArray) + " " +  Math.min.apply(null, numArray);
// }
// 7 similar code variations are grouped with this oneShow Variations

// Best Practices4Clever3
// 0ForkCompare with your solutionLink
// danielstaleiny
// function highAndLow(numbers){
//   const ar = numbers.split(' ');
//   return `${Math.max(...ar)} ${Math.min(...ar)}`
// }
// Best Practices4Clever0
// 0ForkCompare with your solutionLink
// kinludar, Rahul_Raviprasad, eli88p
// function highAndLow(numbers){
//   // ...
// return Math.max.apply(null, numbers.match(/-?\d+/g)) + 
// " " + Math.min.apply(null, numbers.match(/-?\d+/g));
// }
// 3 similar code variations are grouped with this oneShow Variations

// Best Practices3Clever12
// 0ForkCompare with your solutionLink
// colbydauph
// const { min, max } = Math;

// const highAndLow = (numbers) => {
//   numbers = numbers.split(' ');
//   return `${ max(...numbers) } ${ min(...numbers) }`;
// };
// Best Practices3Clever3
// 0ForkCompare with your solutionLink
// deneb, bryantt23, MatamorosF3, GCa, cdearden, zacharydylan, alonzoalden, bbasti, YurijPaharev, kozlowski (plus 260 more warriors)
// function highAndLow(numbers){
//   return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
// }
// 118 similar code variations are grouped with this oneShow Variations

// Best Practices3Clever2
// 0ForkCompare with your solutionLink
// ihsasum
// function highAndLow(numbers){
//   // ... highs and lows - kid cudi needs to be on repeat to complete this kata
//   let numberArray = numbers.split(" ");
//   let min = Math.min(...numberArray);
//   let max = Math.max(...numberArray);
//   return max + " " + min;
  
// }
// Best Practices3Clever1
// 0ForkCompare with your solutionLink
// JWLF, nicoleesposo, istianreid
// function highAndLow(numbers){
//   var sorted = numbers.split(' ').sort(function(a, b){return a - b});
//   return sorted.slice(-1)[0] + ' ' + sorted[0];
// }
// Best Practices3Clever1
// 1ForkCompare with your solutionLink
// FranchBaron
// function highAndLow(numbers){
//   const array = [...numbers.split(' ').map(Number)];
//   return `${Math.max(...array)} ${Math.min(...array)}`;
// }
// Best Practices3Clever0
// 0ForkCompare with your solutionLink
// jonathanobino, iftruereturn, eliash91, unsad, Inkognitoo, maallard, feitiange, rykotovark, toiletpatrol, VLaSH (plus 66 more warriors)
// function highAndLow(numbers){
//   let arr = numbers.split(' ');
//   return `${Math.max(...arr)} ${Math.min(...arr)}`
// }
// 40 similar code variations are grouped with this oneShow Variations

// Best Practices2Clever5
// 3ForkCompare with your solutionLink
// CodeTheory
// function highAndLow(numbers){
//   const arr = numbers.split(' ');
//   let minimum = Math.min( ...arr );
//   let maximum = Math.max( ...arr );
  
//   return maximum + ' ' + minimum;
// }
// Best Practices2Clever2
// 0ForkCompare with your solutionLink
// JohnnyRibo
// function highAndLow(numbers){
//   var x =  numbers.split(" ");
//   var y = x.map(function(item){return parseInt(item,10)});
//   var max = Math.max(...y);
//   var min = Math.min(...y);
//   return  max+ " " +min;
// }
// Best Practices2Clever0
// 0ForkCompare with your solutionLink
// DaTaLe
// let highAndLow = (numbers) => [Array.from(new Set(numbers.split(" ").map(elem => +elem))).filter(elem => elem <= Math.min.apply(null, Array.from(new Set(numbers.split(" ").map(elem => +elem)))) || elem >= Math.max.apply(null, Array.from(new Set(numbers.split(" ").map(elem => +elem)))) ).sort((a, b) => a > b ? -1:1)].map(x => x.length && (x.length > 1 ? x : x.push(x[0]) && x))[0].join(" "); //just try to understand) 
// Best Practices2Clever0
// 0ForkCompare with your solutionLink
// marcoslhc
// function highAndLow(numbers){
//   let nums = numbers.split(' ').map(Number);
//   return [Math.max.apply(null, nums), Math.min.apply(null, nums)].join(' ');
// }
// Best Practices2Clever0
// 0ForkCompare with your solutionLink
// voxlol
// function highAndLow(numbers){
//   var numberArray = numbers.split(" ");
//   var max = Math.max.apply(null, numberArray);
//   var min = Math.min.apply(null, numberArray);
//   return max.toString() + " " + min;
// }
// Best Practices1Clever3
// 0ForkCompare with your solutionLink
// codlan
// function highAndLow(numbers){
//    const numArr = numbers.split(" ");
//         const [lowest, highest] = [Math.min(...numArr), Math.max(...numArr)];

//         return highest + " " + lowest;
// }
// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// user9942718, muratdogan17, l4wl3ss, PatrykPi
// function highAndLow(numbers){
//   const arrNumbers = numbers.split(' ');
  
//   return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`
// }
// 4 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// user4780975
// function highAndLow(args) {
//   return [ Math.max, Math.min ].map(fn => fn(...args.split(" ")) ).join(" ");
// }
// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// Azuaron
// function highAndLow(numbers) {
//   var n = numbers.split(' ').map(function(v) {return parseInt(v);}).sort(function(a, b) {return a - b;});
//   return n.length > 1 ? n.pop() + ' ' + n.shift() : n[0] + ' ' + n[0];
// }
// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// jonathanobino, iftruereturn, eliash91, unsad, Inkognitoo, maallard, feitiange, rykotovark, toiletpatrol, VLaSH (plus 66 more warriors)
// function highAndLow(numbers){
//   let arr = numbers.split(' ');
//   return `${Math.max(...arr)} ${Math.min(...arr)}`
// }
// 40 similar code variations are grouped with this oneShow Variations

// Best Practices2Clever5
// 3ForkCompare with your solutionLink
// CodeTheory
// function highAndLow(numbers){
//   const arr = numbers.split(' ');
//   let minimum = Math.min( ...arr );
//   let maximum = Math.max( ...arr );
  
//   return maximum + ' ' + minimum;
// }
// Best Practices2Clever2
// 0ForkCompare with your solutionLink
// JohnnyRibo
// function highAndLow(numbers){
//   var x =  numbers.split(" ");
//   var y = x.map(function(item){return parseInt(item,10)});
//   var max = Math.max(...y);
//   var min = Math.min(...y);
//   return  max+ " " +min;
// }
// Best Practices2Clever0
// 0ForkCompare with your solutionLink
// DaTaLe
// let highAndLow = (numbers) => [Array.from(new Set(numbers.split(" ").map(elem => +elem))).filter(elem => elem <= Math.min.apply(null, Array.from(new Set(numbers.split(" ").map(elem => +elem)))) || elem >= Math.max.apply(null, Array.from(new Set(numbers.split(" ").map(elem => +elem)))) ).sort((a, b) => a > b ? -1:1)].map(x => x.length && (x.length > 1 ? x : x.push(x[0]) && x))[0].join(" "); //just try to understand) 
// Best Practices2Clever0
// 0ForkCompare with your solutionLink
// marcoslhc
// function highAndLow(numbers){
//   let nums = numbers.split(' ').map(Number);
//   return [Math.max.apply(null, nums), Math.min.apply(null, nums)].join(' ');
// }
// Best Practices2Clever0
// 0ForkCompare with your solutionLink
// voxlol
// function highAndLow(numbers){
//   var numberArray = numbers.split(" ");
//   var max = Math.max.apply(null, numberArray);
//   var min = Math.min.apply(null, numberArray);
//   return max.toString() + " " + min;
// }
// Best Practices1Clever3
// 0ForkCompare with your solutionLink
// codlan
// function highAndLow(numbers){
//    const numArr = numbers.split(" ");
//         const [lowest, highest] = [Math.min(...numArr), Math.max(...numArr)];

//         return highest + " " + lowest;
// }
// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// user9942718, muratdogan17, l4wl3ss, PatrykPi
// function highAndLow(numbers){
//   const arrNumbers = numbers.split(' ');
  
//   return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`
// }
// 4 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// user4780975
// function highAndLow(args) {
//   return [ Math.max, Math.min ].map(fn => fn(...args.split(" ")) ).join(" ");
// }
// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// Azuaron
// function highAndLow(numbers) {
//   var n = numbers.split(' ').map(function(v) {return parseInt(v);}).sort(function(a, b) {return a - b;});
//   return n.length > 1 ? n.pop() + ' ' + n.shift() : n[0] + ' ' + n[0];
// }
// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// jimmy-ringo, datruth29, lordtyger, RayProud, crealee, guntehi, mrgoos, yjw239, krasnyiartem, alexandrefr (plus 137 more warriors)
// function highAndLow(numbers){
//   return Math.max.apply(null, numbers.split(' ')) + ' ' + Math.min.apply(null, numbers.split(' '));
// }
// 94 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// yaasin-raki2
// function highAndLow(numbers){
//   let arr = numbers.split(' ').map( x => Number.parseInt(x))

//   const swap = (i, j) => {
//     let temp;
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
//   }

//   let j = 1
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[j]) {
//       swap(i, j)
//       i -= 2
//       j -= 2
//     }
//     j++
//   }

//   return `${arr[arr.length-1]} ${arr[0]}`
// }
// Best Practices1Clever1
// 1ForkCompare with your solutionLink
// mediv0
// function highAndLow(numbers) {
//   const array = Array.from(numbers.split(" "), Number);
//   let _min = array[0];
//   let _max = array[0];
//   let i = 0;
//   let j = (array.length - 1);
//   while (i < j) {
//     if (array[i] > array[j]) {
//       if (array[i] > _max) {
//         _max = array[i];
//       }
//       if (array[j] < _min) {
//         _min = array[j];
//       }
//       i++;
//     }
//     else if (array[i] < array[j]) {
//       if (array[j] > _max) {
//         _max = array[j];
//       }
//       if (array[i] < _min) {
//         _min = array[i];
//       }
//       j--;
//     }
//     else {
//       i++;
//       j--;
//     }
//   }
//   return `${_max} ${_min}`
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// jurassic-period
// function highAndLow(numbers){
// const getLikeNumbers = numbers.split(' ').map(Number);
// let min = getLikeNumbers[0];
// let max = getLikeNumbers[0];
//   for (let key of getLikeNumbers) {
//     if (key < min) {
//       min = key;
//     } else if (key > max) {
//         max = key;
//       } else continue;
//   }
//   return (max + ' ' + min);
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// IbrahimButt, Jowa2000, Puha1721, whiteBF, muhammadawwad9, DreamerIII
// function highAndLow(numbers){
//   return String(Math.max(...numbers.split(" "))) + " " + String(Math.min(...numbers.split(" ")))
// }
// 6 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// Jiehrev
// function highAndLow(numbers){
//   let numArr = numbers.split(' ').map(x => parseInt(x));
//   let largest = Math.max.apply(Math, numArr);
//   let smallest = Math.min.apply(Math, numArr);
//   return largest + " " + smallest;
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// Rishabh-Ahuja, ClavisAurea

// function highAndLow(numbers) {
//   var highest = Math.max.apply(null,numbers.split(' '));
//   var lowest = Math.min.apply(null,numbers.split(' '));
//   return highest + " " + lowest;
// }
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// jbendotnet, chrisborrowdale, kuatro, Stoope, linuxsable, itzsaga, monkeyson, joypatel04, pzajac, Googrosh, antonreshetov (plus 24 more warriors)
// function highAndLow(numbers) {
//     const sorted = numbers.split(' ').sort((a, b) => a - b);
//     return `${sorted[sorted.length-1]} ${sorted[0]}`;
// }
// 27 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// HaunterIsMyHomeboy
// function highAndLow(numbers){
//   var nums = numbers.split(' ').sort(function(a, b){return b - a});
//   return nums[0] + ' ' + nums[nums.length - 1];
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// Shadow_Cat
// const highAndLow = l => {
//   let r = l.split(' ').map(Number)
//   return `${Math.max(...r)} ${Math.min(...r)}`
// }
 
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// jimmy-ringo, datruth29, lordtyger, RayProud, crealee, guntehi, mrgoos, yjw239, krasnyiartem, alexandrefr (plus 137 more warriors)
// function highAndLow(numbers){
//   return Math.max.apply(null, numbers.split(' ')) + ' ' + Math.min.apply(null, numbers.split(' '));
// }
// 94 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever2
// 0ForkCompare with your solutionLink
// yaasin-raki2
// function highAndLow(numbers){
//   let arr = numbers.split(' ').map( x => Number.parseInt(x))

//   const swap = (i, j) => {
//     let temp;
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
//   }

//   let j = 1
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[j]) {
//       swap(i, j)
//       i -= 2
//       j -= 2
//     }
//     j++
//   }

//   return `${arr[arr.length-1]} ${arr[0]}`
// }
// Best Practices1Clever1
// 1ForkCompare with your solutionLink
// mediv0
// function highAndLow(numbers) {
//   const array = Array.from(numbers.split(" "), Number);
//   let _min = array[0];
//   let _max = array[0];
//   let i = 0;
//   let j = (array.length - 1);
//   while (i < j) {
//     if (array[i] > array[j]) {
//       if (array[i] > _max) {
//         _max = array[i];
//       }
//       if (array[j] < _min) {
//         _min = array[j];
//       }
//       i++;
//     }
//     else if (array[i] < array[j]) {
//       if (array[j] > _max) {
//         _max = array[j];
//       }
//       if (array[i] < _min) {
//         _min = array[i];
//       }
//       j--;
//     }
//     else {
//       i++;
//       j--;
//     }
//   }
//   return `${_max} ${_min}`
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// jurassic-period
// function highAndLow(numbers){
// const getLikeNumbers = numbers.split(' ').map(Number);
// let min = getLikeNumbers[0];
// let max = getLikeNumbers[0];
//   for (let key of getLikeNumbers) {
//     if (key < min) {
//       min = key;
//     } else if (key > max) {
//         max = key;
//       } else continue;
//   }
//   return (max + ' ' + min);
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// IbrahimButt, Jowa2000, Puha1721, whiteBF, muhammadawwad9, DreamerIII
// function highAndLow(numbers){
//   return String(Math.max(...numbers.split(" "))) + " " + String(Math.min(...numbers.split(" ")))
// }
// 6 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// Jiehrev
// function highAndLow(numbers){
//   let numArr = numbers.split(' ').map(x => parseInt(x));
//   let largest = Math.max.apply(Math, numArr);
//   let smallest = Math.min.apply(Math, numArr);
//   return largest + " " + smallest;
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// Rishabh-Ahuja, ClavisAurea

// function highAndLow(numbers) {
//   var highest = Math.max.apply(null,numbers.split(' '));
//   var lowest = Math.min.apply(null,numbers.split(' '));
//   return highest + " " + lowest;
// }
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// jbendotnet, chrisborrowdale, kuatro, Stoope, linuxsable, itzsaga, monkeyson, joypatel04, pzajac, Googrosh, antonreshetov (plus 24 more warriors)
// function highAndLow(numbers) {
//     const sorted = numbers.split(' ').sort((a, b) => a - b);
//     return `${sorted[sorted.length-1]} ${sorted[0]}`;
// }
// 27 similar code variations are grouped with this oneShow Variations

// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// HaunterIsMyHomeboy
// function highAndLow(numbers){
//   var nums = numbers.split(' ').sort(function(a, b){return b - a});
//   return nums[0] + ' ' + nums[nums.length - 1];
// }
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// Shadow_Cat
// const highAndLow = l => {
//   let r = l.split(' ').map(Number)
//   return `${Math.max(...r)} ${Math.min(...r)}`
// }
 
// Best Practices1Clever1
// 0ForkCompare with your solutionLink
// Loading more solutions...
// © 2021 CodewarsAboutAPIBlogPrivacyTermsContact
// powered by


function highAndLow(numbers){
  // return numbers.split(' ') ;// ...
  return [Math.max(...numbers.split(' ')), Math.min(...numbers.split(' '))].join(' ');// ...
}
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");