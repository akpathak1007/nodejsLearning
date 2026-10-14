// LeetCode 707. Design Linked list More cleaner way
function MyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
// Get the value of the index node
// It index is invalid return -1
MyLinkedList.prototype.get = function (index) {
  // Validation for negative index and greater than length
  if (index < 0 || index >= this.length) return -1;
  let current = this.head;
  for (let i = 1; i <= index; i++) {
    current = current.next;
  }
  return current.val;
};
// Add new node which will become head
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = { val, next: this.head };
  this.head = newNode;
  if (!this.tail) this.tail = newNode;
  this.length++;
};
// add node as last element of linked list
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = { val, next: null };
  if (!this.tail) {
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};
// Index in middle add before index node
// Index is equal to length append at the last
// Index greater then length node will not insert
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // index validation for negative and greater than length;
  // we are not using >= because we want to insert element is
  // length and index equal
  if (index > this.length) return;
  // If index is 0
  if (index <= 0) return this.addAtHead(val);
  // if index is last node
  if (index === this.length) return this.addAtTail(val);

  let previous = this.head;

  for (let i = 1; i < index; i++) {
    previous = previous.next;
  }

  previous.next = { val, next: previous.next };
  this.length++;
};
// Delete the index node if index valid.
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // Index validation for negative and greater then length
  if (index < 0 || index >= this.length) {
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    if (!this.head) this.tail = null;
    return;
  }
  let previous = this.head;
  for (let i = 1; i < index; i++) {
    previous = previous.next;
  }
  const deletedNode = previous.next;
  previous.next = deletedNode.next;
  // if deleted node is last elemetn
  if (deletedNode === this.tail) {
    this.tail = previous;
  }
  this.length--;
};

const list = new MyLinkedList();

list.addAtHead(1);
list.deleteAtIndex(0);
list.addAtTail(2);
console.log(list.get(0));
loop(list.head);
process.exit(1);

function loop(head) {
  let current = head;
  while (current) {
    console.log("VAL", current.val);
    current = current.next;
  }
}

// LeetCode 707. Design Linked list
var OldLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
OldLinkedList.prototype.get = function (index) {
  let indexValue = -1;
  if (index === 0) {
    return this.head ? this.head.val : indexValue;
  }
  let current = this.head;
  let counter = 0;
  while (current) {
    if (counter === index) {
      indexValue = current.val;
      break;
    }
    current = current.next;
    counter++;
  }
  return indexValue;
};

/**
 * @param {number} val
 * @return {void}
 */
OldLinkedList.prototype.addAtHead = function (val) {
  let currentHead = this.head;
  let newNode = { val, next: null };
  this.size++;
  if (currentHead) {
    newNode.next = currentHead;
    this.head = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
OldLinkedList.prototype.addAtTail = function (val) {
  const newNode = { val, next: null };
  this.size++;
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }
  this.tail.next = newNode;
  this.tail = newNode;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
OldLinkedList.prototype.addAtIndex = function (index, val) {
  let current = this.head;
  let counter = 0;
  let previous;
  let newNode = { val, next: null };
  if (index > this.size) {
    return;
  }
  if (index <= 0) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return;
  }
  while (current) {
    if (counter === index - 1) {
      previous = current;
      break;
    }
    current = current.next;
    counter++;
  }
  if (!previous) {
    return;
  }
  let nextNode = previous.next;
  if (nextNode === null) {
    previous.next = newNode;
    this.tail = newNode;
  } else {
    newNode.next = nextNode;
    previous.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
OldLinkedList.prototype.deleteAtIndex = function (index) {
  let current = this.head;
  if (!current || index > this.size - 1 || index < 0) {
    return;
  }
  if (index === 0) {
    this.head = current.next;
    this.tail = this.head === null ? null : this.tail;
    this.size--;
    return;
  }
  let counter = 0;
  let previous;
  while (current) {
    if (counter === index - 1) {
      previous = current;
      break;
    }
    counter++;
    current = current.next;
  }
  if (!previous) {
    return;
  }
  let indexNode = previous.next;

  if (indexNode === null) {
    previous.next = null;
    this.tail = previous;
  } else {
    previous.next = indexNode.next;
  }
  this.size--;
};
