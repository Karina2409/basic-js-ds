const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addElem(this._root, data);
    function addElem (node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = addElem(node.right, data);
      } else {
        node.left = addElem(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return hasElem(this._root, data);
    function hasElem(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data > node.data) {
        return hasElem(node.right, data);
      } else {
        return hasElem(node.left, data);
      }
    }
  }

  find(data) {
    return findElem (this._root, data);

    function findElem (node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findElem(node.right, data);
      } else {
        return findElem(node.left, data);
      }
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    return findMin(this._root);
    function findMin(node) {
      if (!node.left) {
        return node.data;
      } else {
        return findMin(node.left);
      }
    }
  }

  max() {
    return findMax(this._root);
    function findMax(node) {
      if (!node.right) {
        return node.data;
      } else {
        return findMax(node.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};