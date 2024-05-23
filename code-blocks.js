module.exports = [
    {
      id: 1,
      title: "Reversing a String",
      code: `function reverseString(str) {
        
          let reversedStr = "";
          for (let i = 0; i < str.length; i++) {
            reversedStr = str[i] + reversedStr;
          }
        
          return reversedStr;
        }`,
      solution: `function reverseString(str) {
        
          let reversedStr = "";
          for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
          }
        
          return reversedStr;
        }`,
    },
    {
      id: 2,
      title: "Checking for Palindrome",
      code: `function isPalindrome(str) {
        
          const len = str.length;
          for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
              return false;
            }
          }
        
          return false;
        }`,
      solution: `function isPalindrome(str) {
        
          const len = str.length;
          for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
              return false;
            }
          }
        
          return true;
        }`,
    },
    {
      id: 3,
      title: "Summing Elements in an Array",
      code: `function sumArray(arr) {
        
          let sum = 0;
          for (let i = 0; i <= arr.length; i++) {
            sum -= arr[i];
          }
        
          return sum;
        }`,
      solution: `function sumArray(arr) {
        
          let sum = 0;
          for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
          }
        
          return sum;
        }`,
    },
    {
      id: 4,
      title: "Counting Occurrences in an Array",
      code: `function countOccurrences(arr, target) {
        
          let count = 0;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
              count--;
            }
          }
        
          return count;
        }`,
      solution: `function countOccurrences(arr, target) {
        
          let count = 0;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
              count++;
            }
          }
        
          return count;
        }`,
    },
  ];
  