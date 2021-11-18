/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let reverseNumber;
  if (x < 0) {
    reverseNumber = -x.toString().replace('-', '').split('').reverse().join('') * 1;
  } else {
    reverseNumber = x.toString().split('').reverse().join('') * 1;
  }
  if (reverseNumber > 2 ** 31 - 1 || reverseNumber < -(2 ** 31)) {
    reverseNumber = 0;
  }
  return reverseNumber;
};
// @lc code=end
