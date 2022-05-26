## Sorting Algorithms

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order. 

### Why learn sorting algorithms:  
* Sorting is an incredibly common task, so it's good to know how it works.
* There are many different ways to sort things, and different techniques have their own advantages and disadvantages.
* Sorting sometimes has quirks, so it's good to understand how to navigate them 

### Bubble Sort
A sorting algorithm where the largest values bubble up to the top!


### Selection Sort
Similar to bubble sort, but instead of first placing large values into sorted positions, it places smalll values into sorted position.


### Insertion Sort
It builds up the sort by gradually creating a larger left half which is always sorted.


| Algorithm | Time complexity (Best) | Time complexity (Average) | Time complexity (Worst) | Space complexity |
|-----------|------------------------|---------------------------|-------------------------|------------------|
| Bubble Sort | O(n)                 | O(n^2)                    | O(n^2)                  | O(1)           |   
| Insertion Sort | O(n)                 | O(n^2)                    | O(n^2)                  | O(1)           |   
| Selection Sort | O(n^2)                 | O(n^2)                    | O(n^2)                  | O(1)           |   


### Merge Sort
* It's a combination of two things - merging and sorting!
* Exploits the fact that arrays 0 or 1 element are always sorted.
* Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.


| Algorithm | Time complexity (Best) | Time complexity (Average) | Time complexity (Worst) | Space complexity |
|-----------|------------------------|---------------------------|-------------------------|------------------|
| Merge Sort| O(n log n)             | O(n log n)                | O(n log n)              | O(n)             |   

### Quick Sort

* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
* Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the array.
* Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

| Algorithm | Time complexity (Best) | Time complexity (Average) | Time complexity (Worst) | Space complexity |
|-----------|------------------------|---------------------------|-------------------------|------------------|
| Quick Sort| O(n log n)             | O(n log n)                | O(n^2)              | O(log n)             | 

### Radix Sort
* Radix sort is a special algorithm that works on lists of numbers.
* It never makes comparisms between elements!
* It exploits the fact that information about the size of a number is encoded in the number of digits.
* More digits means a bigger number!

| Algorithm | Time complexity (Best) | Time complexity (Average) | Time complexity (Worst) | Space complexity |
|-----------|------------------------|---------------------------|-------------------------|------------------|
| Radix Sort|      O(nk)             |      O(nk)                |      O(nk)              | O(n + k)         | 

* n - Length of array
* k - Number of digits(average)