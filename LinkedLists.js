//Linked Lists

/*
Good:
    -add/remove from front in real time
    -ease of insertion/deletion over array
    -dynamic size
Bad:
    -Random access is not allowed
    -binary searchg is ineffiecient
    -not cache friendly
*/




//Singly linked list

//implementation of the node class, initializes next with null if no value is passed
class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }



//INSERT


//Insert at Front

insertAtBeginning(data) {
    //initialzes new node from node class
    let newNode = new Node(data);
    //assigns new nodes pointer to next as the current head
    newNode.next = this.head;
    //reassigns head of list to new node
    this.head = newNode;
    return this.head;
}

//Insert at back
//have to traverse the list and find the tail node

insertAtBack(data) {

    let newNode = new Node(data);
    //edge case if list is empty
    if (!this.head) {
        this.head = newNode;
        return this.head;
    }
    //else traverse list to find tail
    //sets tail to head, and loops until it finds .next value of null
    let tail = this.head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    //after finding tail, sets its next value to new node
    tail.next = newNode;

    return this.head;
}

//Insert at given index

//Create helper function to return a node at a given index
getAtIndex(index) {
    //counter to keep track of length, and check against given index
    let counter = 0;
    //creates node at head to traverse to given index
    let node = this.head;
    //while node != null
    while (node) {
        //checks counter against index
        if (counter === index) {
            //returns node value when you reach given index
            return node;
        }
        //adds to counter and changes node to next to traverse
        counter++;
        node = node.next;
    }
    return null;
}

insertAtIndex(data, index) {
    //if list is empty, (head is null), changes head to given node
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    //if you have to insert at front, changes head to new node, and changes new nodes next to current head
    if (index === 0) {
        this.head = new Node(data, this.head);
        return;
    }
    //calls helper function to keep track of pervious node of currently needed
    let previous = this.getAtIndex(index - 1);
    let newNode = new Node(data);
    //essentially pushing the given index back one by assigning new next values.
    //the actual given index never has to be changed, just the previous nodes.
    newNode.next = previous.next;
    previous.next = newNode;
    return this.head;
}



//DELETE

//Delete from front
deleteAtFront() {
    //to delete, just have to reassign the head to the next value
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
    return this.head;
}

//Delete Last node
//have to traverse list, also having a pointer to the previous of current node
deleteAtBack() {
    //edge cases
    if (!this.head) {
        return null;
    }
    // if only one node in the list
    if (!this.head.next) {
        this.head = null;
        return;
    }
    let previous = this.head;
    let tail = this.head.next;
    //traverse changing both ptrevious and current
    while (tail.next !== null) {
        previous = tail;
        tail = tail.next;
    }
    //changing previous.next to null making it last in the list
    previous.next = null;
    return this.head;
}

//Delete at Index

deleteAtIndex(index) {
    // when list is empty i.e. head = null
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    // node needs to be deleted from the front of the list i.e. before the head.
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
        return;
    }
    //changing next value to the next.next which is skipping over a node to reassign
    previous.next = previous.next.next;
    return this.head
}

nthFromEnd(n){

    let len = 0;
    let temp = this.head;
    while(this.next) {
        temp = this.next;
        len++;
    }

    let targetIndex = len - n + 1;

    for (let i = 0; i<targetIndex; i++){
        if (this.next){
            return this.head;
        }

        this.head = this.next;
    }

}
}

let list = new LinkedList();

list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);
list.insertAtBeginning(4);
list.insertAtBeginning(5);
list.insertAtBeginning(6);
list.insertAtBeginning(7);
list.insertAtBeginning(8);

console.log(list.nthFromEnd(9));