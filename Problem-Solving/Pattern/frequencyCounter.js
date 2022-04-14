// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared inthe second array.
// The frequency of the values must be the same.

//BigO --> O(n^2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

// BigO --> O(n)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

// console.log(same([1,2,3,2], [4,1,4,9]))

// Given two strings, write a function to determine if the second string is a anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let lookup = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup)
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false
        } 
        else {
            lookup[letter] -= 1
        }
    }
   
    return true
}

console.log(validAnagram('prime', 'emipr'))