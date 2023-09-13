const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
        // This would be O(1) because we are just manipulating the end of the
        // queue and not traversing through it.
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        const returnNode = this.head;

        if (!this.head) {
            return null;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return returnNode.value;
        // Write your hypothesis on the time complexity of this method here
        // This would be O(1) because we are just manipulating the front
        // of the queue and not traversing it.
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
