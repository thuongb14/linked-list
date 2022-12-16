class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
    // a Node starts with a given data property
    // a Node also has a .next property initialized as null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    // a Linked List starts with a "head" property intialized as null
  }

  appendNode(data) {
    let newNode = new Node(data);
    // creates a new node with the given data and adds it to back of the list
    // When head = null i.e. the list is empty, then head itself will point to the newNode.
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  }
  prependNode(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    // As we are inserting at the beginning the head pointer needs to now point at the newNode.

    this.head = newNode;
    return this.head;
    // creates a new node with the given data and adds it to the front of the list
  }
  pop(head) {
    if (!this.head) {
      return null;
    }
    if (this.head.length === 1) {
      this.head = null;
      return;
    }
    let previous = null;
    let current = this.head;
    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    //if cur.next == null, cur should be removed and return,
    current = null;
    return previous.next;
  }

  // removes the last node from the list and returns it

  removeFromFront() {
    if (!this.head) {
      return null;
    }
    if (this.head.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    const currentHead = this.head;
    const newHead = currentHead.next;
    this.head = newHead;
    return currentHead;
    // remove the head node from the list and return it
    // the next node in the list is the new head node
  }

  insertAt(X, data) {
    const newNode = new Node(data);
    let current = this.head;

    if (!this.head) return null;
    if (X === 0) {
      newNode.next = current;
      this.head = newNode;
      return;
    }
    for (let i = 0; i < X - 1; i++) {
      current = current.next;
    }
    const nextNode = current.next;
    current.next = newNode;
    newNode.next = nextNode;
    // insert a new node into the list with the given data
    // place it after X nodes in the list
    // if X exceeds the bounds of the list, put the node at the end
    // insertAt(0, 7) would add the new node as the head
  }

  removeAt(X) {
    // if(!this.head) {
    //   return null
    // }
    // if (this.head.length === 1) {
    //   return this.head
    // }
    // let current = this.head
    // let previous = null
    // for (let i = 0; i < X; i++) {
    //     previous = current
    //     current = current.next
    //   }
    // remove the Xth node from the list, considering 0 to be the first node
    // return the node that has been removed
  }
  search(data) {
    // searches the list for a node with the given data
    // if it is found, return the "index" of the node, considering 0 to be the first node
    // if not, return false
  }
  sort() {
    // sort the Linked List in ascending order of data values
  }
}
// Test Script below, DO NOT TOUCH
