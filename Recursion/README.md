# Recursion
A process (a function in our case) that calls itself. Recursive functions invoke the **same** function with a different input until yoou reach your base case!.   
**Base Case** is the condition when the recursion ends.

# Two essential parts of a recursive function:
* Base case
* Different Input

# Common problems
* No base case.
* Forgetting to return or returning the wrong thing.
* Stack overflow.

# Helper Method Recursion
A pattern where an outer function that is not recursive calls an inner function which is recursive.

# Pure Recursion
A pattern where the function itself is contained and is recursive without an external data structure or nexted function.

**Pure Recursion Tips**
* For arrays, use methods like **slice, the spread operator**, and **concat** that make copies of array so you do not mutate them.
* Remember that strings are immutable so you will need to use methods like **slice, substr, or substring** to make copies of strings.
* To make copies of objects, use **Object.assign, or the spread operator**