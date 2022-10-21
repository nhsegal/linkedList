let Node = class {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
};

let LinkedList = class {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  append(value) {
    let pointer = this._head;
    if (pointer === null) {
      this._head = new Node(value);
      this._tail = this._head;
      return;
    } else {
      while (pointer.nextNode) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = new Node(value);
      this._tail = pointer.nextNode;
      return;
    }
  }

  prepend(value) {
    if (!this._head) {
      this._head = new Node(value);
      this._tail = this._head;
      return;
    }
    const newHead = new Node(value);
    newHead.nextNode = this._head;
    this._head = newHead;
  }

  size() {
    let i = 0;
    let pointer = this._head;
    while (pointer) {
      pointer = pointer.nextNode;
      i++;
    }
    return i;
  }

  head() {
    return this._head;
  }

  tail() {
    let pointer = this._head;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  at(index) {
    if (index < 0) return null;
    let size = this.size();
    if (index > size) return null;
    let pointer = this._head;
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
    let pointer = this._head;
    while (pointer.nextNode.nextNode !== null){
      pointer = pointer.nextNode;
    }
    pointer.nextNode = null;
    this._tail = pointer;
  }

  contains(value) {
    let pointer = this._head;
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
    let pointer = this._head;
    while (pointer.value !== value && pointer.nextNode) {
      index++;
      pointer = pointer.nextNode;
    }
    if (pointer.value === value) return index;
    return null;
  }
  toString() {
    let str = ''
    let pointer = this._head;
    while (pointer) {
      str = str + `(${ pointer.value }) -> `;
      pointer = pointer.nextNode;
    }
    str = str + 'null';
    return str
  }

  insertAt(value, index) {
    let size = this.size()
    if (index < 0 || index > size + 1) {
      console.log('invalid')
      return
    }
    if (index === 0) {
      this.prepend(value); 
      return
    }
    if (index === size +1)  {
      this.append(value);
      return
    }
    let nodeToInsert = new Node(value=value);
    let previousNode = this._head;
    let nextNode = this._head.nextNode;
    let i = 1;
    while (i < index) {
      previousNode = nextNode;
      nextNode = nextNode.nextNode;
      i++;
    } 
    nodeToInsert.nextNode = previousNode.nextNode;
    previousNode.nextNode = nodeToInsert;
  
  }

  removeAt(index) {
    let size = this.size();
    if (index < 0 || index > size - 1) {
      console.log('invalid')
      return
    }
    if (index === size - 1)  {
      this.pop();
      return
    }
    if (index === 0) {
      this._head = this._head.nextNode;
      return
    }

    let i = 1;
    let previousNode = this._head;
    let pointer = this._head.nextNode;
    while (i < index)  {
      previousNode = pointer;
      pointer = pointer.nextNode;
      i++;
    }
    previousNode.nextNode = pointer.nextNode;


  }


};

const myList = new LinkedList();
myList.append("Mary");
myList.append("bob");
myList.append("apple");
myList.append("Alice");
console.log(myList.find('apple'));
console.log(myList.toString());
myList.insertAt('asdf',2);
console.log(myList.toString());

