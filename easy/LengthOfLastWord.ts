// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s: string): number {
  //     consider empty, and single inputs
  if (!s) return null;

  //     a one liner approach using js methods
  //     split the input into an array of words by using space as the delimiter
  // return s.trim().split(' ').pop().length

  let sentenceLength: number = s.length - 1;
  let wordLength: number = 0;

  while (sentenceLength >= 0) {
    if (s[sentenceLength] === " " && wordLength > 0) {
      return wordLength;
    } else if (s[sentenceLength] !== " ") {
      wordLength++;
    }
    sentenceLength--;
  }
  return wordLength;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
