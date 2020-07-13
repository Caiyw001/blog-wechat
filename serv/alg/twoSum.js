//给出一个整数数组，请在数组中找出两个加起来等于目标值的数，
//你给出的函数twoSum 需要返回这两个数字的下标（index1，index2），需要满足 index1 小于index2.。注意：下标是从0开始的
function twoSum(nums, target) {
  let map = {};
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (map[nums[i]]) continue;
    let diff = target - nums[i];
    let tmpIndex = nums.indexOf(diff, i + 1);
    if (tmpIndex > -1) res.push([i, tmpIndex]);
    map[nums[i]] = true;
  }
  return res;
}

let rlt = twoSum([1, 2, 3, 4, 5, 6, 7], 8);
console.log(rlt);