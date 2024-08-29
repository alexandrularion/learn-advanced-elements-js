/**
    Linked List Exercise: Append and Print
        Write a function inOrderTraversal(root) that takes the root of a binary tree and prints the nodes in in-order (left-root-right) sequence.
    Tips:
        Recursion is your friend here. Start from the root:
        Recursively visit the left subtree.
        Print the root node.
        Recursively visit the right subtree.
 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new TreeNode(data);

    if (this.root === null) {
      // TODO: Set `root` to `newNode`
    } else {
      // TODO: Call `insertNode` to place `newNode` correctly in the tree
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        // TODO: Set `node.left` to `newNode`
      } else {
        // TODO: Recursively insert on the left
      }
    } else {
      if (node.right === null) {
        // TODO: Set `node.right` to `newNode`
      } else {
        // TODO: Recursively insert on the right
      }
    }
  }

  inOrderTraversal(node) {
    if (node !== null) {
      // TODO: Traverse left subtree
      // TODO: Print node data
      // TODO: Traverse right subtree
    }
  }

  getRootNode() {
    return this.root;
  }
}

// Example:
let tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);

let root = tree.getRootNode();
tree.inOrderTraversal(root);
// Output: 5 10 20
