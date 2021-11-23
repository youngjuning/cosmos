/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return s === s.split('').reverse().join('');
};
// @lc code=end
