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
    const n = nums[i];
    const j = nums.findIndex(item => n + item === target);
    if (i !== j && j !== -1) {
      return [i, j];
    }
  }
  return [];
};
// @lc code=end
