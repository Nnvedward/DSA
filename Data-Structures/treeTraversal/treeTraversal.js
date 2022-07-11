class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value === current.value) return undefined
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                }
            }
        }
    }
    BFS() {
        let node = this.root,
            data = [],
            queue = []
        queue.push(node)

        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }
    DFSPreOrder() {
        let data = []
        function traverse(node) {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
    DFSPostOrder() {
        let data = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    DSFInOrder() {
        let data = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}
let tree = new Tree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.DFSPostOrder()