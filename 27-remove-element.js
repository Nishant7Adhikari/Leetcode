/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    nums.forEach((n, i) => {
        if(n != val){
            nums[k] = n
            k++
        }
            
    });
    return k
}