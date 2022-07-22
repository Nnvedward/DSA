// Undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
       if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return this
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacenctVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacenctVertex)
        }
        delete this.adjacencyList[vertex]
    }
}

// Weighted Graph 

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
       if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }
}

let weightedGraph = new WeightedGraph()
weightedGraph.addVertex('A')
weightedGraph.addVertex('B')
weightedGraph.addVertex('C')
weightedGraph.addEdge('A', 'B', 4)
weightedGraph.addEdge('A', 'C', 6)
weightedGraph.addEdge('B', 'C', 10)