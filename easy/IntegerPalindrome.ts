// Given an integer x, return true if x is palindrome integer.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x: number): boolean {
  //     reverse the number without converting it to a string
  //     if you were to use the string conversion approach (which is not being used here) then converting it to a string you would need to split the string then reverse the resulting array, join it back and then compare.
  //     if it's a negative number terminate the code

  if (x < 0) return false;

  const reverseInt = (num: number): number => {
    //         if you want to reverse negative integers then first convert the number to positive by multiplying by -1 then after the reversal reconvert it to negative by multiplying by -1 again
    let reverse: number = 0;
    let number: number = num;

    while (number >= 1) {
      reverse = Math.floor(reverse * 10 + (number % 10)); // a number modulo 10 gives you the last digit in that number
      number = Math.floor(number / 10);
    }

    return reverse;
  };
  if (reverseInt(x) === x) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(1999999991));
console.log(isPalindrome(10));
