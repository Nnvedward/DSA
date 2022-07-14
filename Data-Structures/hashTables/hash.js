// Hash function
function hash(key, arraylen) {
    let total = 0
    let PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        // map "a" to 1, "b" to 2, "c" to 3, etc
        let value = char.charCodeAt(0) - 96
        total = (total * PRIME + value) % arraylen
    }
    return total
}

console.log(hash("prime", 13))