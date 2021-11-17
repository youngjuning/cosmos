/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n]) {
      return [i, hash[target - n]];
    }
    hash[n] = i;
  }
  return [];
};
twoSum([3, 4, 5], 7);
// @lc code=end
