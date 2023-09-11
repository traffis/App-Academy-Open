const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const num = 10000;

const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();

// LinkedList addToHead timing
const startLLH = Date.now();
for (let i = 1; i <= num; i++) {
  linkedList.addToHead(i);
}
const endLLH = Date.now();
console.log(`LinkedList addToHead() time: ${endLLH - startLLH}ms`);

// LinkedList addToTail timing
const startLLT = Date.now();
for (let i = 1; i <= num; i++) {
  linkedList.addToTail(i);
}
const endLLT = Date.now();
console.log(`LinkedList addToTail() time: ${endLLT - startLLT}ms`);

// DoublyLinkedList addToHead timing
const startDLLH = Date.now();
for (let i = 1; i <= num; i++) {
  doublyLinkedList.addToHead(i);
}
const endDLLH = Date.now();
console.log(`DoublyLinkedList addToHead() time: ${endDLLH - startDLLH}ms`);

// DoublyLinkedList addToTail timing
const startDLLT = Date.now();
for (let i = 1; i <= num; i++) {
  doublyLinkedList.addToTail(i);
}
const endDLLT = Date.now();
console.log(`DoublyLinkedList addToTail() time: ${endDLLT - startDLLT}ms`);
