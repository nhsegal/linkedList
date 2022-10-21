let Node = class {
  constructor(value = null, nextNode = null){
    this.value = value;
    this.nextNode = nextNode;
  }
};

let LinkedList = class {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  append(value) {
    this.size++;
    let pointer = this.head;
    if (pointer === null) {
      this.head = new Node(value);
      this.tail = this.head;
      return;
    }
    else {
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = new Node(value); 
      this.tail = pointer.nextNode;
      return;
    } 
  }

  prepend(value) {
    this.size++;
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      return
    }
    const newHead = new Node(value);
    newHead.nextNode = this.head;
    this.head = newHead;
  }
  at(index) {
    if (index < 0) return null;
    if (index > this.size) return null;
    let pointer = this.head;
    let counter = 0;
    while (counter < index) {
      pointer = pointer.nextNode;
      counter++;
    }
    if (pointer === null) {
      console.log('Not found');
      return null;
    }
    return pointer;
  }
  pop() {
    let pointer = this.head;
    while (pointer.nextNode.nextNode !== null){
      pointer = pointer.nextNode;
    }
    pointer.nextNode = null;
    this.tail = pointer;
    this.size--;
  }
  contains(value) {
    let pointer = this.head;
    while (pointer) {
      if (pointer.value === value){
        return true;
      } 
      pointer = pointer.nextNode;
    }
    return false

  }
  find(value) {
    let index = 0;
    let pointer = this.head;
    while (pointer.value !== value && pointer.nextNode) {
      index++;
      pointer = pointer.nextNode;
    }
    if (pointer.value === value) return index;
    return null;
  }
  toString() {
    let str = ''
    let pointer = this.head;
    while (pointer) {
      str = str + `(${ pointer.value }) -> `;
      pointer = pointer.nextNode;
    }
    str = str + 'null';
    return str
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size + 1) {
      console.log('invalid')
      return
    }
    if (index === 0) {
      this.prepend(value); 
      return
    }
    if (index === this.size +1)  {
      this.append(value);
      return
    }
    let nodeToInsert = new Node(value=value);
    let previousNode = this.head;
    let nextNode = this.head.nextNode;
    let i = 1;
    while (i < index) {
      previousNode = nextNode;
      nextNode = nextNode.nextNode;
      i++;
    } 
    nodeToInsert.nextNode = previousNode.nextNode;
    previousNode.nextNode = nodeToInsert;
    this.size++;
  }


  removeAt(index) {
    if (index < 0 || index > this.size - 1) {
      console.log('invalid')
      return
    }
    if (index === this.size - 1)  {
      this.pop();
      return
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      this.size--;
      return
    }

    let i = 1;
    let previousNode = this.head;
    let pointer = this.head.nextNode;
    while (i < index)  {
      previousNode = pointer;
      pointer = pointer.nextNode;
      i++;
    }
    previousNode.nextNode = pointer.nextNode;
    this.size--;

  }

}


const myList = new LinkedList();
myList.append('Mary');
myList.append('bob');
myList.append('apple');
myList.append('Alice');
myList.insertAt('max', 2);
console.log(myList.toString());
myList.removeAt(5);
console.log(myList.toString());
console.log(myList.size)
