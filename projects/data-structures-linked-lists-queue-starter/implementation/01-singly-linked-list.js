// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here.
        // I think the time complexity of addToHead() will be O(1) since
        // we are just assigning a new node at the head of the singly linked list.
        // We don't need to iterate through the the linked list, or manipulate
        // the middle of it.
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here.
        // I think that the time complexity of addToTail() will be O(n) since
        // we have to iterate through the whole singly linked list to add to the tail.

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return undefined;
        }

        const returnNode = this.head;

        if (!this.head.next) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return returnNode;

        // Write your hypothesis on the time complexity of this method here.
        // I think that the time complexity of removeFromHead() will be O(1)
        // since we are just manipulating the head of the singly linked list
        // and not iterating through it.
    }

    removeFromTail() {
        // Remove node at tail
        // 1 -> 2 -> 3 -> null
        if (!this.head) {
            return undefined;
        }

        let currentNode = this.head;
        this.length--;

        if (!currentNode.next) {
            this.head = null;
            return currentNode;
        }

        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }

        const returnNode = currentNode.next;
        currentNode.next = null;
        return returnNode;

        // Write your hypothesis on the time complexity of this method here.
        // I think the time complexity of removeFromTail() will be O(n) since
        // we have to iterate through almost the whole singly linked list to
        // remove the tail node.
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) {
            return undefined;
        }
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here.
        // The time complexity of peekAtHead() will be O(1) since we don't
        // have to iterate through the singly linked list to grab the head's
        // value.
    }

    print() {
        // Print out the linked list
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }

        // Write your hypothesis on the time complexity of this method here.
        // The time complexity of print() will be O(n) because we iterate
        // through the whole singly linked list to print it.
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
