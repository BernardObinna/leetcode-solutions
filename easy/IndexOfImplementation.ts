// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack: string, needle: string): number {
  //     catch the edge case if the strings are empty
  if (!needle || !haystack || needle.length > haystack.length) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[j + i]) break;
        else if (j === needle.length - 1) return i;
      }
    }
  }

  return -1;
};

console.log(strStr("mississippi", "issip"));
