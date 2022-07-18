### Graphs
A **graph data structure** consits of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for a directed **graph**.

### Uses for graph
* Social Networks
* Location / Mapping
* Routing Algorithms
* Visual Hierachy
* File System Optimizations
* **EVERYWHERE!**

**Essencial graph terms**
* **Vertex** - a node
* **Edge** - connection between nodes
* **Weighted/Unweighted** - values assigned to distances between vertices
* **Directed/Undirected** - directions assigned to distances between vertices

**Ways of storing graphs**

| Adjacency list    |    Adjacency matrix    |
|-------------------|------------------------|
| Can take up less space (in sparse graphs) | Takes up more space (in sparse graphs) |
| Faster to iterate over all edges | Slower to iterate over all edges |
| Can be slower to lookup specific edge | Faster to lookup specific edge |