//A Binary Search tree is a binary tree in which nodes that have lesser data are stored on the left while the nodes with a higher data are stored at the right.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySeachTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        var newNode = new Node(data);
        //edge case first always, checks for head, if none, changes head to newNode
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        //sets pointer to the root
        let current = this.root;
        //set up loop to iterate through to find placement of node
        while (current) {
            //edge case to prevent duplicate values
            if (data === current.data) return undefined;
            //checks values to less than or greater than, to go either left or right.
            //if value is null, it changes that value to newnode, otherwise continues loop
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(data) {
        if (!this.root) return false

        let current = this.root
        let found = false
        while (current && !found) {
            if (data < current.data) {
                current = current.left
            } else if (data > current.data) {
                current = current.right
            } else {
                found = current
            }

        }

        if (!found) return undefined;
        return found


    }
}

let tree = new BinarySeachTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(tree.find(0));