/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s: string): number | null {
  //     identify if the input has a valid value
  //     create an object with the roman numerals mapped to their integer values
  //     the object should state if it is a round figure and if it can act as a subtractive figure
  // create a result variable initialized to zero to hold the result
  //     loop through the input string
  // have a skip variable to be incremented in the case of having a subtractive figure so that the next figure which has already been subtracted won't be considered
  //      check if the next element is a round figure and if the current figure is a subtractive figure and that they are not equal
  //     if it is then subtract the current value from the next value and add it to the result variable
  //     if it isn't them add the curent value to the result value
  // return the result variable

  if (!s.length) return null;

  const legend: {} = {
    I: { num: 1, isRound: false, isSub: true },
    V: { num: 5, isRound: true, isSub: false },
    X: { num: 10, isRound: true, isSub: true },
    L: { num: 50, isRound: true, isSub: false },
    C: { num: 100, isRound: true, isSub: true },
    D: { num: 500, isRound: true, isSub: false },
    M: { num: 1000, isRound: true, isSub: false },
  };

  let result: number = 0;
  let skip: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (skip) {
      skip -= 1;
      continue;
    }

    if (
      s[i + 1] &&
      legend[s[i + 1]].isRound &&
      legend[s[i]].isSub &&
      legend[s[i + 1]].num !== legend[s[i]].num &&
      legend[s[i + 1]].num > legend[s[i]].num
    ) {
      result += legend[s[i + 1]].num - legend[s[i]].num;
      skip += 1;
    } else {
      result += legend[s[i]].num;
    }
  }
  return result;
};

// time complexity O(n)
