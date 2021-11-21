/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let prev = 0;
  let max = nums[0];
  nums.forEach(num => {
    prev = Math.max(prev + num, num);
    max = Math.max(max, prev);
  });
  return max;
};
// @lc code=end
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
