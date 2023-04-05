/*
You are given a 0-indexed array nums comprising of n non-negative integers.

In one operation, you must:

Choose an integer i such that 1 <= i < n and nums[i] > 0.
Decrease nums[i] by 1.
Increase nums[i - 1] by 1.
Return the minimum possible value of the maximum integer of nums after performing any number of operations.
 */

 var minimizeArrayValue = function(nums) {
    let answer = nums[0]
    let total = nums[0]
    for(let i=1;i<nums.length;i++){
        total += nums[i]
        answer = Math.max(answer, Math.ceil(total/(i+1)))
    }
    return answer
};

console.log(minimizeArrayValue([3,7,1,6]));
console.log(minimizeArrayValue([10,1]));
