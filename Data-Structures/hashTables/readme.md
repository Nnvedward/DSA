### Hash Table
* Hash tabls are used to store *key-value* pairs.
* They are like arrays, but the keys are not ordered.
* Unlike arrays, hash tables are fast for all of the following operations: finding values. adding new values and removing values. 

**What makes a good hash?**
- Fast (i.e. constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input yields same output)

**Handling collision**
- Separate Chaining: At each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list). This allows us to store multiple key-value pairs at the same index.
- Linear Probing: When we find a collision, we search through the array to find the next empty slot.