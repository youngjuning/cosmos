/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
// @lc code=start
function isalnum(char) {
  return (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z');
}
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isalnum(s[left])) {
      left++;
      continue;
    }
    if (!isalnum(s[right])) {
      right--;
      continue;
    }
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
// @lc code=end
