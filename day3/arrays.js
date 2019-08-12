/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let first;
    let second;
    first = second = nums[0];
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }
        else if (nums[i] > second && nums[i] != first){
            second = nums[i];
        }
    }
    return second;
}
