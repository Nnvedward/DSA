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
}

let graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('Nairobi')
graph.addVertex('Oslo')
graph.addEdge('Nairobi', 'Tokyo')
graph.addEdge('Nairobi', 'Oslo')
graph.removeEdge('Nairobi', 'Oslo')