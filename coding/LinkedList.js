class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
    for(const value of arguments) {
      this.add(value)
    }
  }

  add(value) {
    if (this.length === 0) {
      this.head = new Node(value)
    } else {
      let node = this.head
      while(node.next) {
        node = node.next
      }
      node.next = new Node(value)
    }
    this.length++
  }

  has(value) {
    let node = this.head
    while(node) {
      if(node.value === value) {
        return true
      }
      node = node.next
    }
    return false
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default LinkedList
