import BinarySearchTree from './BinarySearchTree.js'

class BinaryTree extends BinarySearchTree {

  inorder(fn, node = this.root) {
    if(node !== null) {
      this.inorder(fn, node.left)
      fn(node.value)
      this.inorder(fn, node.right)
    }
  }

  preorder(fn, node = this.root) {
    if(node !== null) {
      fn(node.value)
      this.preorder(fn, node.left);
      this.preorder(fn, node.right);
    }
  }

  postorder(fn, node = this.root) {
    if(node !== null) {
      this.postorder(fn, node.left);
      this.postorder(fn, node.right);
      fn(node.value)
    }
  }
}

export default BinaryTree