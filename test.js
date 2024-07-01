// Q#1: Sort an array in descending order

function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  const array1 = [3, 2, 7, 4, 6, 9];
  console.log(sortDescending(array1));

  
// Q#2: Check if a string is a palindrome

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  const string1 = "madam";
  const string2 = "doctor";
  console.log(isPalindrome(string1));
  console.log(isPalindrome(string2));

// Q#3: Sum of the two largest numbers in an array

function sumOfTwoLargest(arr) {
    if (arr.length < 2) throw new Error("Array must contain at least two elements");
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[0] + sortedArr[1];
  }
  
  const array2 = [3, 7, 1, 5, 11, 19];
  console.log(sumOfTwoLargest(array2));


// Q#4: Return missing elements from 0 to the highest entry in an array

function findMissingElements(arr) {
    const max = Math.max(...arr);
    const fullSet = new Set(Array.from({ length: max + 1 }, (_, i) => i));
    const arrSet = new Set(arr);
    const missingElements = [...fullSet].filter(x => !arrSet.has(x));
    return missingElements;
  }
  
  const array3 = [3, 4, 9, 1, 7, 3, 2, 6];
  console.log(findMissingElements(array3));


// Q#5: Find the most repeated number in an array

function mostRepeatedNumber(arr) {
    const countMap = new Map();
    arr.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));
    let maxCount = 0;
    let mostRepeated;
    countMap.forEach((count, num) => {
      if (count > maxCount) {
        maxCount = count;
        mostRepeated = num;
      }
    });
    return `${mostRepeated} is repeated ${maxCount} times.`;
  }
  
  const array4 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
  console.log(mostRepeatedNumber(array4));

  
// Q#6: Rotate an array to the right by one position

function rotateRight(arr) {
    if (arr.length === 0) return arr;
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
  }
  
  const array5 = [3, 8, 9, 7, 6];
  console.log(rotateRight(array5));
  
