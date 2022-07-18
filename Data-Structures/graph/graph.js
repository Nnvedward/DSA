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
}

let graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('Nairobi')
graph.addVertex('Oslo')
graph.addEdge('Tokyo', 'Nairobi')
graph.addEdge('Nairobi', 'Oslo')