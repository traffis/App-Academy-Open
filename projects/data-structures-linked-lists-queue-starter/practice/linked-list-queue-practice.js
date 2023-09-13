// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        /*
         * O(n) Implementation:
         *     count = 0;
         *     if (this.head) {
         *         let currentNode = this.head;
         *         while (currentNode) {
         *             count += 1;
         *             currentNode = currentNode.next;
         *         }
         *     }
         *     return count;
         */
        // O(1) implementation:
        return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;

        if (this.head) {
            let currentNode = this.head;

            while (currentNode) {
                sum += currentNode.value;
                currentNode = currentNode.next;
            }
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
        // This will be O(n) because we traverse through the whole linked list
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();

        // Write your hypothesis on the time complexity of this method here
        // Since sumOfNodes() is O(n), this will be O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let count = 0;
        let currentNode = this.head;

        while (count !== n) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;

        // Write your hypothesis on the time complexity of this method here
        // This will be O(n) since we are traversing through the linked list.
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        // I don't think the implementation for a doubly and singly linked list
        // will vary since the middle should be the same in both types.

        let middle = Math.floor(this.listLength() / 2);

        if (this.listLength() % 2 === 0) {
            middle--;
        }

        return this.findNthNode(middle);
        // Write your hypothesis on the time complexity of this method here
        // Since findNthNode() is O(n), findMid() will be O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversedList = new SinglyLinkedList();
        let currentNode = this.head;

        while (currentNode) {
            let newNode = new SinglyLinkedNode(currentNode.value);
            newNode.next = reversedList.head;
            reversedList.head = newNode;
            currentNode = currentNode.next;
        }

        return reversedList;

        // Write your hypothesis on the time complexity of this method here
        // This would be O(n) since we traverse through the linked list
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prevNode = null;
        let currentNode = this.head;
        let nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;

        // Write your hypothesis on the time complexity of this method here
        // This would be O(n) since we are traversing through the linked list
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let length = 0;
        let currentNode = this.head;
        while (currentNode) {
            length++;
            currentNode = currentNode.next;
        }


        let middle = Math.floor(length / 2);

        if (length % 2 === 0) {
            middle--;
        }

        let count = 0
        currentNode = this.head;
        while (count !== middle) {
            currentNode = currentNode.next;
            count++;

        }

        return currentNode;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversedList = new DoublyLinkedList();
        let currentNode = this.tail;

        while (currentNode) {
            let newNode = new DoublyLinkedNode(currentNode.value);

            if (!reversedList.head) {
                reversedList.head = newNode;
                reversedList.tail = newNode;
            } else {
                reversedList.tail.next = newNode;
                reversedList.tail = newNode;
            }

            currentNode = currentNode.prev;
        }

        return reversedList;
        // Write your hypothesis on the time complexity of this method here
        // This would be O(n) because we are traversing through the original
        // doubly linked list.
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let currentNode = this.head;

        while (currentNode) {
            let tempNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = tempNode;
            currentNode = currentNode.prev;
        }
        currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        // Write your hypothesis on the time complexity of this method here
        // This would be O(n) since we are traversing the linked list.
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
