## Big O Notation

Big O notation is a way of generalizing and comparing code solution in other to know which one is the best solution. It is a way of formalize fuzzy counting, and it allows us to talk about how the run time of an algorithm grows as the input grows

We say that an algorithm is O(f(n)) if the number of simple operation a computer has to perform is eventually less than a constant times f(n), as n increases

# Why Big O
Time complexity by counting the number operations the computer has to perform It's is usefull for discussing trade-off between different approaches When your code crashes or slow down, it can help in identifying codes that are inefficient It's is important to have a precise vocabulary to talk about code performance

# Big O ShortHand
Arithematic operations are constant variable assignment is constant Accessing elements in an array by index or object by key is constant In a loop the complexity is the length of the loop times or whatever happens inside of a the loop

# Time Complexity
How to analyze the run time of an algorithm as the size of the input increases

**Run time**
f(n) could be quadratic (f(n) = n^2)  
f(n) could be linear (f(n) = n)  
could be binary search Log(N)  
f(n) could be constant (f(n) = 1)  
f(n) could be something entirely different

# Space Complexity
How much additional memory do we need to allocate in other to run the code in our algorithm

# Rules
Most primitives (booleans, numbers, undefined, null) are constant space  
String require O(n) space (where n is the string length)  
Reference types are generally O(n) where n is the length (for arrays) or the number of keys (for objects)

# Logarithm
The logrithm of a number roughly measures the number of time you can divide that number by 2 and before you get the number that is equal to or less than one.

# Big O of Objects
Insertion = O(1)  
Removal = O(1)  
Searching = O(n)  
Acsess = O(1)

# Big O of Arrays
Insertion = it depends (beginning of an array = O(n), end of an Arry = O(1))  
Removal =it depends (beginning of an array = O(n), end of an Arry = O(1))  
Searching = O(n)  
access = O(1)