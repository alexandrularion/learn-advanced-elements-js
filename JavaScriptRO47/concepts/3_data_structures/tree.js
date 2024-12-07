class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; // left child
    this.right = null; // right child
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      // insert node at specific position
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  find(value, node = this.root) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      return this.find(value, node.left); // Search in the left subtree
    } else if (value > node.value) {
      return this.find(value, node.right); // Serach in the right subtree
    } else {
      return node; // node found
    }
  }
}

const tree1 = new BinaryTree();

tree1.insert(10);
tree1.insert(14);
tree1.insert(8);
tree1.insert(3);
tree1.insert(90);
tree1.insert(45);
tree1.insert(68);
tree1.insert(72);
tree1.insert(24);

console.log("In-Order traversal: ");
tree1.inorder();

const node = tree1.find(90);
if (node) {
  console.log("Node found with value: ", node.value);
  console.log("Node: ", node);
} else {
  console.log("Node not found.");
}
