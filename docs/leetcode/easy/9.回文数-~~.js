/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let y = x;
  let z = 0;
  while (y) {
    z = z * 10 + (y % 10);
    y = ~~(y / 10);
  }
  return x === z;
};
// @lc code=end
