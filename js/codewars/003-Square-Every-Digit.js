// Kata

// Dashboard
// Kata
// Docs
// Blog
// Kumite
// Forum
// Leaders

// 8 kyu
// 12
// 7 kyu
// Square Every Digit
// 112019789% of 14,78950,704 of 122,711MysteriousMagenta
// JavaScript
// TRAIN AGAINNEXT KATA
// Details
// Solutions
// Forks (33)
// Discourse (394)
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
// jeffsb, GitauHarrison, Alicemaina, prof1880, jacobcarey93, ibrahim-jr, rafcio3141, kiyasama, yolo-carol, mowu (plus 203 more warriors)
// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
// }
// 119 similar code variations are grouped with this oneShow Variations

// Best Practices316Clever592
// 375ForkCompare with your solutionLink
// Technologic101, Raman_Kozar, Raman_Nerad, pachareal, albinanur, junipberry, harrydry, 82frost, alvar91, Petrq95 (plus 4 more warriors)
// function squareDigits(num){
//   var array = num.toString().split('').map( function(int) {
//     var i = parseInt(int);
//     return i * i;
//   });
  
//   return parseInt(array.join(""));
// }
// 8 similar code variations are grouped with this oneShow Variations

// Best Practices100Clever34
// 3ForkCompare with your solutionLink
// cse25, Bugbeak, dzianisbohush, brittanyjat, KS9986094549@, Sarra94, Jefferson455, Tsyman, gOHostwith1R
// function squareDigits(num){
//     var string = num.toString();
//     var results = [];
//     for (var i = 0; i < string.length; i++){
//         results[i] = string[i] * string[i];
//     }
//     return Number(results.join(''));
// };
// 6 similar code variations are grouped with this oneShow Variations

// Best Practices74Clever18
// 1ForkCompare with your solutionLink
// Lends, Liubomyr, s0verina, dgrubov, nikitabulatov, pdelac, fsticza, MassaBrutto, turdiyev, clockfake (plus 16 more warriors)
// function squareDigits(num){
//   return +num.toString().split('').map(i => i*i).join('');
// }
// 20 similar code variations are grouped with this oneShow Variations

// Best Practices65Clever86
// 5ForkCompare with your solutionLink
// nolds9, kotiknalune, chrisleut
// function squareDigits(num){
//   let result = num
//     .toString()
//     .split("")
//     .map( num => parseInt(num) )
//     .map( num => num * num )
//     .join("")
   
//   return parseInt(result)
// }
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices48Clever26
// 2ForkCompare with your solutionLink
// Kamilius, user3863845
// function squareDigits(num){
//   return +String(num).split('').map(function(num){return +num * +num;}).join('');
// }
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices18Clever14
// 1ForkCompare with your solutionLink
// frauyau
// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices12Clever15
// 0ForkCompare with your solutionLink
// jackdalton
// function squareDigits(num){
//   //may the code be with you
//   var numS = num.toString();
//   var output = "";
//   for (var i = 0; i < numS.length; i++) {
//     output += parseInt(numS[i]) * parseInt(numS[i]);
//   }
//   return parseInt(output);
// }
// Best Practices11Clever2
// 0ForkCompare with your solutionLink
// ooflorent, lo@, swytor
// function squareDigits(num) {
//   var str = String(num)
//   var res = ''
  
//   for (var i = 0; i < str.length; i++) {
//     res += Math.pow(str.charCodeAt(i) - 48, 2)
//   }
  
//   return parseInt(res)
// }
// 3 similar code variations are grouped with this oneShow Variations

// Best Practices9Clever7
// 4ForkCompare with your solutionLink
// nklunder, Ulyana_Nikalayenko
// function squareDigits(num){
//   var numArray = num.toString(10).split('').map(Number);
//   var powArray = numArray.map(function (n) { return n * n; });
//   var powString = powArray.join('');

//   return parseInt(powString, 10);
// }
// Best Practices9Clever5
// 0ForkCompare with your solutionLink
// jarvis
// function squareDigits(num) { 
//   return ~~num.toString().split('').reduce(function(p, c) {
//       return '' + p + (~~c*~~c);
//   }, '');
// }
// Best Practices5Clever21
// 1ForkCompare with your solutionLink
// bjunior, TonyMasterR, crazyYuyang, maxg321, antkhnvsk, JiangLirui, steeks
// function squareDigits(num){
//   return +(num+'').split('').map(a=>a*a).join('');
// }
// 6 similar code variations are grouped with this oneShow Variations

// Best Practices5Clever7
// 0ForkCompare with your solutionLink
// q06mdunne, limeyb7, jarivo, sgmaster, jdetomasi, xGETSx, enrifeka, xSmallDeadGuyx, Etienne CBS, sandst1 (plus 8 more warriors)
// function squareDigits(num){
//   return parseInt(num.toString().split("").map(n => Math.pow(parseInt(n), 2)).join(""))
// }
// 16 similar code variations are grouped with this oneShow Variations

// Best Practices5Clever6
// 0ForkCompare with your solutionLink
// colbydauph
// function squareDigits(num){
//   return +(num + '').split('').reduce(function(r, v){
//     return v = +v, r + v * v;
//   }, '');
// }
// Best Practices4Clever7
// 0ForkCompare with your solutionLink
// Cameron_
// function squareDigits(num){
//   return parseInt(num.toString().split('').map(function(n){
//     return +n * +n;
//   }).join(''), 10);
// }
// Best Practices4Clever1
// 0ForkCompare with your solutionLink
// Fasvald, Nikafix
// function squareDigits(num){
//   var digits = ("" + num).split("");
//   for (var i = 0; i < digits.length; i++) {
//     digits[i] = digits[i] * digits[i];
//   }

//   var int = parseInt(digits.join(''));

//   return int;
// }
// 1 similar code variation is grouped with this oneShow Variations

// Best Practices3Clever1
// 0ForkCompare with your solutionLink
// Edwin.01
// function squareDigits(num){
//   var num = num.toString();
//   var res = ''
//   for (var i = 0; i != num.length; i++){
//     res += (Number(num[i]) * Number(num[i])).toString();
//   }
//   return Number(res);
// }
// Best Practices3Clever0
// 1ForkCompare with your solutionLink
// Unihedron
// function squareDigits(num){
//   return +num.toString().split('').map(v=>[0,1,4,9,16,25,36,49,64,81][v]).join('');
// }
// Best Practices2Clever18
// 2ForkCompare with your solutionLink
// 71emj
// function squareDigits(num){
//   //may the code be with you
//   return +(num + "").replace(/\d/g, matched => matched * matched)
// }
// Best Practices2Clever7
// 0ForkCompare with your solutionLink
// e.mihaylin
// squareDigits = n => Number(n.toString().split('').map(e => e * e).join(''));
// Best Practices2Clever2
// 0ForkCompare with your solutionLink
// Loading more solutions...
// © 2021 CodewarsAboutAPIBlogPrivacyTermsContact
// powered by


// Kata

// Dashboard
// Kata
// Docs
// Blog
// Kumite
// Forum
// Leaders

// 8 kyu
// 10
// 7 kyu
// Square Every Digit
// 112019789% of 14,78950,701 of 122,704MysteriousMagenta2 Issues Reported
// JavaScript
// Node v12.x
// VIM
// EMACS
// Instructions
// Output
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERS

// powered by

// Solution:
// 1
// function squareDigits(num){
// 2
//   //may the code be with you
// 3
  
// 4
// }
// Sample Tests:
// 1
// const { assert } = require("chai")
// 2
// ​
// 3
// describe("Basic tests", () => {
// 4
//   it("Testing for fixed tests", () => {
// 5
//     assert.strictEqual(squareDigits(3212), 9414);
// 6
//     assert.strictEqual(squareDigits(2112), 4114);
// 7
//     assert.strictEqual(squareDigits(0), 0);
// 8
//     })
// 9
//   })
// 10
// ​
// SKIP
// UNLOCK SOLUTIONS
// DISCUSS (159)
// RESET
// TEST
// ATTEMPT

function squareDigits(num){
  const array = num.toString().split('');
  // const array = parseInt(num).toString().split('');// if input isn't int
  
  for (let index = 0; index < array.length; index++) {
    array.splice(index, 1, (array[index] ** 2));
  }
 
  return Number(array.join(''));
}

console.log(`squareDigits(3212), 9414`, squareDigits(3212));
console.log(`squareDigits(2112), 4114`, squareDigits(2112));
console.log(`squareDigits(0), 0`, squareDigits(0));
console.log(`squareDigits(9119), 811181`, squareDigits(9119));

