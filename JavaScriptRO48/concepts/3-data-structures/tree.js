export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const insertNode = (node, value) => {
      if (!node) return new TreeNode(value);
      if (value < node.value) {
        node.left = insertNode(node.left, value);
      } else {
        node.right = insertNode(node.right, value);
      }
      return node;
    };

    this.root = insertNode(this.root, value);
  }

  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  find(value, node = this.root) {
    if (!node) return null;
    if (value === node.value) return node;
    return value < node.value
      ? this.find(value, node.left)
      : this.find(value, node.right);
  }
}
