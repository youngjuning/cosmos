/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      value -= symbols[s[i]];
    } else {
      value += symbols[s[i]];
    }
  }
  return value;
};
// @lc code=end
