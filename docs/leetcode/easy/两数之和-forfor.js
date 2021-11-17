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
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (num + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
// @lc code=end
twoSum();
