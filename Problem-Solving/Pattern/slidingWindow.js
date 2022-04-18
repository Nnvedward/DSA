/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

// Time complexity --> O(n^2)
// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null
//     }
//     let max = -Infinity
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j]
//         }
//         if (temp > max) {
//             max = temp
//         }
//     }
//     return max
// }

// Time complexity --> O(n)
function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
console.log(maxSubarraySum([1,3,2,4,5,3,5,2,1], 4))