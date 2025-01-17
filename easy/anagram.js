/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const st1 = str1.replace(' ', '').toLowerCase().split('').sort().join('');
  const st2 = str2.replace(' ', '').toLowerCase().split('').sort().join('');
  return st1 == st2;
}
// console.log(isAnagram('Debit Card', 'Bad Credit'))
module.exports = isAnagram;
