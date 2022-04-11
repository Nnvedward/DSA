// Always 3 operations 
   //   O(1)
function addUpTo(n) {
    return n * (n + 1) / 2
}


// Number of operation is bounded by multiple of n 
   //   O(n)
function addUpTo(n){
    let total = 0
    for(let i = 0; i <= n; i++){
       total += i
    }
    return total
}


// Number of operation is bounded by multiple of n 
//       O(n)
function countUpAndDown(n){
       // O(n)
    for(let i = 0; i <= n; i++){
        console.log(i)
    }
       // O(n)
    for(let c = n ; c >= 0; c--){
        console.log(c)
    }   
}

// Nested loops
// O(n) operation inside of O(n) operation = 
//        O(n^2)
function printAllPairs(n){
        // O(n)  
    for(var i = 0; i < n; i++){
        // O(n)
        for(var c = 0; c < n; c++){
            console.log(i, c)
        }
    }
}

// As n grow, the number of operation grows on proportion to n, i.e
    // O(n)
function logAtLeast5(n){
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i)
    }
}


//As n grow, it doesn't matter because it takes the min... i.e
    // O(1)
function logAtMost5(n){
    for(let i = 1; i <= Math.min(5, n); i++){
        console.log(i)
    }
}