/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
const map = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
]);
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (map.has(c)) {
      stack.push(c);
    } else if (map.get(stack.pop()) !== c) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
