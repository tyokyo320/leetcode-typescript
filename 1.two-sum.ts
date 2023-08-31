/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        if (map.has(target - nums[index])) {
            return [map.get(target - nums[index]), index];
        }
        map.set(nums[index], index);
    }

    return [-1, -1];
};
// @lc code=end

