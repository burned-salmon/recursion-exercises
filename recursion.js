/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  let lengthFirst = words[0].length;
  let lengthRest = longest(words.slice(1));
  if (lengthFirst > lengthRest) {
    return lengthFirst;
  }
  else {
    return lengthRest;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return 0;
  if (str.length === 1 || str.length === 2) return str.charAt(0);
  let firstLetter = str.charAt(0);
  return firstLetter.concat(everyOther(str.substring(2)));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  return (str == revString(str));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let returnArr = [];
  let allValsArr = Object.values(obj);
  for (let value of allValsArr) {
    if (typeof value === 'string') {
      returnArr.push(value);
    }
    else if (typeof value === 'object') {
      returnArr.concat(gatherStrings(value));
    }
  }
  return returnArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
