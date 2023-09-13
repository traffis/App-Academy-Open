// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here.
        // This would be O(1) because we're only manipulating the head of
        // the doubly linked list.

        // Add node of val to head of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here.
        // This would be O(1) because we're only manipulating the tail of
        // the doubly linked list.
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return undefined;
        }

        const returnNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = returnNode.next;
            this.head.prev = null;
        }

        this.length--;
        return returnNode.value;

        // Write your hypothesis on the time complexity of this method here.
        // The time complexity of this would be O(1) because we don't iterate
        // through the doubly linked list.
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) {
            return undefined;
        }

        const returnNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next= null;
        }

        this.length--;
        return returnNode.value;

        // Write your hypothesis on the time complexity of this method here.
        // The time complexity of this would be O(1) because we don't iterate
        // though the doubly linked list.
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) {
            return undefined;
        }
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here.
        // The time complexity of this would be O(1) because we just grab
        // the doubly linked list's head value without iterating through it.
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.head) {
            return undefined;
        }
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here.
        // The time complexity of this would be O(1) because we just grab
        // the doubly linked lists' head value without iterating through it.
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
