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
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map.has(target - n)) {
      return [i, map.get(target - n)];
    }
    map.set(n, i);
  }
  return [];
};
// @lc code=end
twoSum([1, 2, 3, 6], 5);
