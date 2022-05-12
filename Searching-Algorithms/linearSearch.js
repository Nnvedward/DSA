/**
 * Linear Search
 * @param {Array} arr Array
 * @param {any} val Value
 * @returns Index of the value in the array if it matches any value passed
 */

function linearSearch(arr, val) {
    for (let key of arr) {
        if(arr[key] === val) {
            return key
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5], 6))