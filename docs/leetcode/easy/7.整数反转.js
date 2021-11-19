/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 * https://leetcode-cn.com/problems/reverse-integer/solution/tu-jie-guan-fang-tui-jian-ti-jie-zheng-s-rh6b/
 */
const reverse = function (x) {
  let res = 0;
  let y = x;
  while (y) {
    res = res * 10 + (y % 10);
    if (res > 2 ** 31 - 1 || res < -(2 ** 31)) return 0;
    y = ~~(y / 10);
  }
  return res;
};
// @lc code=end
reverse(12345);
