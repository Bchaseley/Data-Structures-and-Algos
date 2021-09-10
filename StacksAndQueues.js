//Stacks are linear data structure with insertion and deletion happening on same end.
//Queues follow similar, except it is FIFO/LILO

//follows either LIFO/FILO - same difference

class Stack {

    constructor(){
        //stacks are set up using an empty array
        this.data = [];
        //top is used to keep track of index/length. when a stacks top = 0 it is empty
        this.top = 0;
    }

    push(num){
        this.data.push(num);
        this.top ++;
    }

    pop(num){
        if (this.top === 0){
            console.log("stack is empty, sorry")
        }
        this.data.pop();
        this.top --;
    }
}


class Queue {
    constructor(){
        this.data - [];
    }

    enqueue(num){
        this.data.push(num);
    }

    dequeue(){
        this.data.shift();
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.data);