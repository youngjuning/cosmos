/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

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
