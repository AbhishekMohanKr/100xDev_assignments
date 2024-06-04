/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!count[char]) {
      return false;
    } else {
      count[char]--;
    }
  }

  return true;
}

module.exports = isAnagram;
console.log(isAnagram("Bad Credit", "Debit Card")); // true