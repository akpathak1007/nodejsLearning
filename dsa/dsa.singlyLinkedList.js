const visibility = isVisible();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  static loop(head) {
    let current = head;
    let resultArray = [];

    while (current) {
      resultArray.push(current.value);
      current = current.next;
    }
    return resultArray;
  }
  static at(head, index) {
    let current = head;
    let resultArray = [];
    let counter = 0;
    if (index === 0) {
      return head;
    }
    while (current) {
      if (counter == index) {
        break;
      }
      resultArray.push(current.value);
      current = current.next;
      counter++;
    }
    return current;
  }
}
// this is required only two pointers and fixedHead
practice(visibility.oddEvenLinkedList, () => {
  const list = linkedList(5);
  console.log(Node.loop(list));
  const handler = (head) => {
    if (!head) return null;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
    return head;
  };
  const result = handler(null);
  console.log(Node.loop(result));
});

// Using two differnt pointers and a counter;
// with two fixed heads for even and odd
practice(visibility.oddEvenLinkedListV1, () => {
  const list = linkedList(6);
  console.log(Node.loop(list));
  const handler = (head) => {
    if (!head) return null;
    let odd = head;
    let even = head.next;
    let oddPrevious = { value: 0, next: null },
      evenPrevious = { value: 0, next: null };
    let current = head;
    let index = 1;
    debugger;
    while (current) {
      debugger;
      if (index % 2 === 0) {
        evenPrevious.next = current;
        evenPrevious = current;
        debugger;
      } else {
        oddPrevious.next = current;
        oddPrevious = current;
        debugger;
      }
      current = current.next;
      index++;
      debugger;
    }
    evenPrevious.next = null;
    oddPrevious.next = even;
    debugger;
    return odd;
  };

  const result = handler(list);
  console.log(Node.loop(result));
});

practice(visibility.lengthOfTheLoop, () => {
  const list = linkedList(6);

  console.log(Node.loop(list));
  const thirdNode = list.next.next;
  const tail = Node.at(list, 5);
  //  tail.next = thirdNode;
  const handler = (head) => {
    let slow = head;
    let fast = head;
    let meetingPoint;

    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        meetingPoint = slow;
        break;
      }
    }
    if (!meetingPoint) return 0;
    let fixed = meetingPoint;
    let length = 0;
    while (meetingPoint) {
      length++;
      meetingPoint = meetingPoint.next;
      if (fixed === meetingPoint) {
        return length;
      }
    }
    return length;
  };
  console.log(handler(list));
});

// LeetCode 19 Remove nth node from end of the list
practice(visibility.removeEndNthNode, () => {
  const list = linkedList(6);
  console.log(Node.loop(list));

  const handler = (head, n) => {
    if (n <= 0 || !head) return head;
    let dummy = { val: 0, next: head };
    let slow = dummy;
    let fast = dummy;
    let i = 0;
    for (i; i < n + 1; i++) {
      if (!fast) {
        return head;
      }
      fast = fast.next;
    }
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
  };

  const result = handler(list, 9);
  console.log(Node.loop(result));
});

// Leetcode 206
practice(visibility.reverseLinkedList, () => {
  const list = linkedList(6);
  console.log(Node.loop(list));
  const handler = (head) => {
    let reverse = null;
    let current = head;
    while (current) {
      let newHead = current;
      current = newHead.next;
      newHead.next = reverse;
      reverse = newHead;
    }
    return reverse;
  };
  const result = handler(list);
  console.log(Node.loop(result));
});
// LeetCode 142
practice(visibility.linkedListCycle2, () => {
  const list = linkedList(2);
  const secondNode = list.next;
  const tail = Node.at(list, 1);
  tail.next = list;
  const handler = (head) => {
    let slow = head;
    let fast = head;
    // Find the meeting point
    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
        break;
      }
    }
    if (fast === null || fast.next === null) return null;
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  };
  console.log(handler(list));
});
// LeetCode 141
practice(visibility.linkedListCycle, () => {
  const list = linkedList(6);
  const secondNode = list.next;
  const tail = Node.at(list, 5);
  tail.next = secondNode;
  const handler = (head) => {
    let slow = head;
    let fast = head;
    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  };
  console.log(handler(list));
});

// LeetCode 876
practice(visibility.middleOfLinkedList, () => {
  const ll5 = linkedList(5);
  const ll6 = linkedList(6);
  console.log(Node.loop(ll6));
  // Finding the length;

  const handler = (head) => {
    let slow = head;
    let fast = head;
    // Finding the length;
    while (fast?.next) {
      slow = slow.next;
      fast = fast.next?.next;
    }

    return slow;
  };
  console.log(handler(ll5));
  console.log(handler(ll6));
});

// LeetCode 876
practice(visibility.middleOfLinkedListV1, () => {
  const ll5 = linkedList(5);
  const ll6 = linkedList(6);
  console.log(Node.loop(ll6));
  // Finding the length;

  const handler = (head) => {
    let length = 0;
    let current = head;
    // Finding the length;
    while (current) {
      length++;
      current = current.next;
    }
    // finding middle
    let middle = Math.floor(length / 2);
    current = head;
    while (middle > 0) {
      current = current.next;
      middle--;
    }

    return current;
  };
  console.log(handler(ll5));
  console.log(handler(ll6));
});

practice(visibility.searchInLinkedList, () => {
  const list = linkedList(4);
  console.log(Node.loop(list));
  const search = (head, target) => {
    let current = head;
    let index = -1;
    let counter = 0;
    while (current) {
      if (current.value === target) {
        index = counter;
        break;
      }
      counter++;
      current = current.next;
    }
    return index;
  };
  console.log(search(list, "Sanjeev"));
});

// LeetCode 237. Delete Node in a Linked List
practice(visibility.deleteNode, () => {
  const list = linkedList(4);
  const handler = (node) => {
    let nextNode = node.next;
    node.value = nextNode.value;
    node.next = nextNode.next;
    nextNode.next = null;
  };

  console.log(Node.loop(list));
  handler(Node.at(list, 3));
  console.log(Node.loop(list));
});

practice(visibility.singlyInsert, () => {
  // Linkedlist function will give a Singly Linked list
  //containing names as value
  let head = linkedList(3);
  const insertAtBeginning = (head, node) => {
    node.next = head;
    return node;
  };
  const insertAtEnd = (head, node) => {
    if (!head) {
      return node;
    }
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return head;
  };
  const insertAtPosition = (head, node, index) => {
    if (index < 0) {
      throw Error("Invalid index");
    }
    if (!head) {
      if (index !== 0) {
        throw Error("Invalid Index");
      }
      return node;
    }
    if (index === 0) {
      node.next = head;
      return node;
    }
    let previous = null;
    let temp = head;
    let counter = 0;
    debugger;
    while (temp) {
      debugger;
      if (counter === index - 1) {
        previous = temp;
        break;
        debugger;
      }
      temp = temp.next;
      counter++;
      debugger;
    }
    if (!previous) {
      throw Error("Invalid Index");
    }
    node.next = previous.next;
    previous.next = node;
    return head;
  };
  const deleteAtPosition = (head, index) => {
    if (!head || index < 0) {
      throw Error("Empty linked list or invalid index");
    }
    // Deleting first Node
    if (index === 0) {
      return head.next;
    }
    // Deleting at position
    let counter = 0;
    let previous;
    let current = head;
    while (current) {
      if (counter === index - 1) {
        previous = current;
        break;
      }
      current = current.next;
      counter++;
    }
    if (!previous) {
      throw Error("Invalid Index");
    }
    let givenIndexNode = previous.next;
    if (!givenIndexNode) {
      throw Error("Invalid Index");
    }
    previous.next = givenIndexNode.next;
    return head;
  };
  //  head = insertAtPosition(head, new Node("Sharma"), 2);
  console.log(Node.loop(head));
  head = deleteAtPosition(head, 2);
  console.log(Node.loop(head));
});

practice(visibility.traversingLinkedList, () => {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  let head = new Node(Math.floor(Math.random() * 1000));
  // Generating linked list randomly
  let previous = head;
  for (let i = 0; i < 10; i++) {
    let node = new Node(Math.floor(Math.random() * 1000));
    previous.next = node;
    previous = node;
  }
  // Traversion the linked list
  const traverse = (head) => {
    const result = [];
    let current = head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  };

  console.log(traverse(head));
});

practice(visibility.linkedListNode, () => {
  // Using function constructor
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  const node1 = new Node(10);
  const node2 = new Node(20);
  node1.next = node2;
  console.log(node1.next);
  // Using Object literal
  const node3 = { value: 30, next: null };
  const node4 = { value: 40, next: null };
  node3.next = node4;
  console.log(node3.next);
  // Using classp
  class Node1 {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  const node5 = new Node1(50);
  const node6 = new Node1(60);
  node5.next = node6;
  console.log(node5.next);
});

/**
// Template
   practice(visibility, () => {
  let data = null;
  const handler = (data) => {};
log(data);
  function log(input) {
  console.log('### INPUT', '###')
    handler(input);
    console.log(arr);
  }
});
*/

function linkedList(max) {
  const arr = [
    "Anuj",
    "Manish",
    "Saurabh",
    "Sanjeev",
    "Abhishek",
    "Vinay",
    "Dhruv",
  ];
  if (max > arr.length) {
    throw Error("Max element can be ", arr.length);
  }
  let head = new Node(arr[0]);
  let previous = head;
  for (let i = 1; i < max; i++) {
    let temp = new Node(arr[i]);
    previous.next = temp;
    previous = temp;
  }
  return head;
}

function practice(visibility, cb) {
  if (!visibility) return;
  const startTime = performance.now();
  cb();
  let time = performance.now() - startTime;
  time = time.toFixed(3) + " ms";
  console.log("## Execution Time", time, "\n");
}

function isVisible(name) {
  const testFunction = {
    linkedListNode: 0,
    traversingLinkedList: 0,
    singlyInsert: 0,
    deleteNode: 0,
    searchInLinkedList: 0,
    middleOfLinkedList: 0,
    linkedListCycle: 0,
    linkedListCycle2: 0,
    reverseLinkedList: 0,
    removeEndNthNode: 0,
    lengthOfTheLoop: 0,
    oddEvenLinkedList: 1,
  };

  return testFunction;
}
