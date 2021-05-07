class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add() {
    for(const value of arguments) {
      const newNode = new Node(value)
      if(this.root === null) {
        this.root = newNode
      } else {
        this.insertNode(this.root, newNode)
      }
    }
  }

  has(value, node = this.root) {
    if(node === null) {
      return false
    }
    if(node.value === value) {
      return true
    }
    if(node.value > value) {
      return this.has(value, node.left)
    } else {
      return this.has(value, node.right)
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value)
  }

  size(node = this.root) {
    if (node == null) {
      return 0
    } else {
      return this.size(node.left) + 1 + this.size(node.right)
    }
  }

  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right,newNode)
      }
    }
  }

  removeNode(node, value) {
    if(node === null) {
      return null
    } else if(value < node.value) {
      node.left = this.removeNode(node.left, value)
      return node
    } else if(value > node.value) {
      node.right = this.removeNode(node.right, value)
      return node
    } else {
      if(node.left === null && node.right === null) {
        node = null
        return node
      } if(node.left === null) {
        node = node.right
        return node
      } else if(node.right === null) {
        node = node.left
        return node
      }

      const minNode = this.findMinNode(node.right)
      node.value = minNode.value
      node.right = this.removeNode(node.right, minNode.value)

      return node
    }
  }

  findMinNode(node) {
    if(node.left === null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export default BinarySearchTree
