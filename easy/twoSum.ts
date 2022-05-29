// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums: number[], target: number): number[] | null {
  //catch out of bounds input
  if (nums.length < 2) return null;
  //go through the array while summing values by indicies

  let result: number[] = [];
  let hashmap: {} = {};
  //O(n) result
  for (let i = 0; i < nums.length; i++) {
    let addition = target - nums[i];
    if (hashmap[addition] != undefined) {
      // the undefined check here is to account for zero indexes
      result = [i, hashmap[addition]];
      break;
    } else {
      hashmap[nums[i]] = i;
    }
  }

  //  O(n^2) result using multiple pointers
  //  let first = 0;
  //     let second = 1
  //     while (first < nums.length) {
  //         if(nums[first] + nums[second] === target){
  //             result = [first, second];
  //             break;
  //         } else if (second === nums.length){
  //             first++
  //             second = first + 1
  //         } else {
  //             second++
  //         }
  //     }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
