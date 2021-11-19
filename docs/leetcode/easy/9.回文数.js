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
  let temp = x;
  let res = 0;
  while (temp) {
    res = res * 10 + (temp % 10);
    temp = ~~(temp / 10);
  }
  return x === res;
};
// @lc code=end
