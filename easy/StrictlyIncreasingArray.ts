// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// e.g Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums: number[]): boolean {
  //     catch empty array or null input
  if (!nums || !nums.length) return false;

  //     Naive solution. O(n ^ 2)
  //     loop through nums, with another loop per index checking the rest of the array
  // let tempArr: number[] = []
  // for (let i = 0; i < nums.length; i++){
  //     tempArr = [...nums];
  //     tempArr.splice(i, 1);
  //     for(let j = 0; j < tempArr.length; j++){
  //         if(nums[j + 1] && tempArr[j] < tempArr[j+1] ){
  //             continue
  //         } else if(!tempArr[j + 1]){
  //             return true
  //         } else {
  //             break;
  //         }
  //     }
  //     return false;

  //         optimized solution
  let previous: number = nums[0];
  let skippedDigit: boolean = false;

  for (let i = 1; i < nums.length; i++) {
    if (previous >= nums[i]) {
      if (skippedDigit) return false;
      skippedDigit = true;
      if (i === 1 || nums[i] > nums[i - 2]) previous = nums[i];
    } else {
      previous = nums[i];
    }
  }
  return true;
};

// time complexity O(n)
// space complexity O(1)

// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
