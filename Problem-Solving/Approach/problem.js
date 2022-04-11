// Write a function which takes in a string and returns counts of each character in the string.

// // Explore simple examples
// charCount('aaaa')
// /*{
//     a: 4
// }
//  */

// // Progress to more complex example
// charCount('hello')
// /*{
//     h: 1,
//     e: 1,
//     l: 2,
//     o: 1
// }
//  */

// // Progress to more complex example && invalid charaters
// charCount('Your Pin Number is 1234!')
// /*{
//     1: 1,
//     2, 1,
//     3, 1,
//     4: 1,
//     b: 1,
//     e: 1,
//     i: 2,
//     m: 1,
//     n: 2,
//     o: 1,
//     p: 1,
//     r: 2,
//     s: 1,
//     u: 2,
//     y: 1
// } */


// // breaking it down with steps
// function charCount(str) {
//     // do something
//     // return an object with keys that are lowercase alphanumeric characters in the string; values should be number of times the character appeared in the string.
// }

// function charCount(str) {
//     // make object to return
//     // loop over string, for each character...
//         // if the char is a num/letter AND is a key in obj, add one to count
//         // if the char is a num/letter AND not in obj, add it to obj and set the value to 1
//         // if char is something else (space, period, etc) don't do anything
//     // return object at the end
// }

// function charCount(str) {
//     // make object to return
//     let result = {}

//     // loop over string, for each character...
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()

//         // if the char is a num/letter AND is a key in obj, add one to count
//         if (result[char] > 0) {
//             result[char]++
//         } 
//         // if the char is a num/letter AND not in obj, add it to obj and set the value to 1
//         else {
//             result[char] = 1
//         }
//     }
//     // if char is something else (space, period, etc) don't do anything
//     // return object at the end
//     return result
// }

// // First Refactor
// function charCount(str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++
//             } else {
//                 obj[char] = 1
//             }
//         }
//     }
//     return obj
// }

// // Second Refactor
// function charCount(str) {
//     let obj = {}
//     for (let char of str) {
//         char = char.toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++
//             } else {
//                 obj[char] = 1
//             }
//         }
//     }
//     return obj
// }

// Third Refactor
function charCount(str) {
    let obj = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

// Alphanumeric function
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false
    }
    return true
}

// Fourth Refactor
function charCount(str) {
    let obj = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

console.log(charCount('Hi there!'))