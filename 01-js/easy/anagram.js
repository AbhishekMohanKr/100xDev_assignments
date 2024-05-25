/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let count = 0;
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();
  let len = str1.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (str1[i] === str2[j]) {

        count++;
      }
    }
  }console.log(count)
  if (count === len) {
    return true;
  } else {
    return false;
  }
}
module.exports = isAnagram;
console.log(isAnagram("Bad Credit", "Debit Card")); // true

