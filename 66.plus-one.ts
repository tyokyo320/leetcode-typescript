/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    // BigInt 数据类型的目的是比 Number 数据类型支持的范围更大的整数值以任意精度表示整数
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(Number)
};
// @lc code=end

