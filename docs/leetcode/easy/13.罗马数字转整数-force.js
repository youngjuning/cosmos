/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const len = s.length;
  let num = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === 'V') num += 5;
    if (s[i] === 'L') num += 50;
    if (s[i] === 'D') num += 500;
    if (s[i] === 'M') num += 1000;
    if (s[i] === 'I') {
      if (s[i + 1] === 'V' || s[i + 1] === 'X') num -= 1;
      else num += 1;
    }
    if (s[i] === 'X') {
      if (s[i + 1] === 'L' || s[i + 1] === 'C') num -= 10;
      else num += 10;
    }
    if (s[i] === 'C') {
      if (s[i + 1] === 'D' || s[i + 1] === 'M') num -= 100;
      else num += 100;
    }
  }
  return num;
};
// @lc code=end
