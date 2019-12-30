/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length - 1; j++) {
      if (nums[i] === nums[j]) {
        i++;
        console.log('result: ', result);
      } else {
        result = nums[i];
      }
    }
  }

  return result;
};

console.log(singleNumber([3, 1, 2, 1, 2, 3, 4]));
