// Before we sort, we must swap!
// Many sorting algorithms involve some type of swapping functionality (e.g. swapping two numbers to put them in order)

// ES5
//  function swap(arr, idx1, idx2) {
//      var temp = arr[idx1]
//      arr[idx1] = arr[idx2]
//      arr[idx2] = temp
//  }

// ES2015
//  const swap = (arr, idx1, idx2) => {
//      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//  }

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function bubbleSort2(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
             }
        }
    }
    return arr
}

// Optimizing the bubble sort algorithm for when the array is almost sorted
function bubbleSortOp(arr) {
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSortOp([13, 2, 5, 6, 8, 12]))