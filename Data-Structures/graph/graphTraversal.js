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
    depthFirstRecursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        function dsf(vertex) {
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dsf(neighbor)
                }
            })
        }

        dsf(start)
        return result
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')
graph.depthFirstRecursive('A')