// Hash function
function _hash(key, arraylen) {
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

// Hash Table
class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size)
    }

    hash(key) {
        let total = 0
        let PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let index = this.hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this.hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }
}

let ht = new HashTable(17)
ht.set('red', '#12344dd')
ht.set('blue', '#ffssdd')
ht.set('yellow', '#88ookk')
ht.set('olive', '#hhjjkk')
ht.set('salmon', '#eerrtt')
ht.set('lightcoral', '#qqwwee')
ht.set('plum', '#ppooll')
ht.set('maroon', '#qqwwee')
ht.set('purple', '#ppooll')
ht.values()