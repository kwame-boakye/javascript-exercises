// const palindromes = function (variable) {

//     const cleaned = variable.replace(/[^a-z0-9]/gi, '').toLowerCase();
//     let i = 0;
//     let j = cleaned.length - 1;

//     while (i < j) {
//         if (cleaned[i] !== cleaned[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }

//     return true;
// };
const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};


// Do not edit below this line
module.exports = palindromes;
