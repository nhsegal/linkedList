const Node = (value = null, nextNode = null) => {
  return { value, nextNode }
}

const LinkedList = () => {
  let _head = null;
  let _tail = null;

  const append = (value) => {
    const newNode = Node(value = value);
    if (_head === null) {
      _head = newNode;
      _tail = newNode;
      return;
    }
    let pointer = _head;
    while (pointer.nextNode) {
      pointer = pointer.nextNode
    }
    pointer.nextNode = newNode;
   
  }
  
  const prepend = (value) => {
    const newNode = Node(value = value);
    if (!_head) {
      _head = newNode;
      _tail = newNode;
      return;
    }
    newNode.nextNode = _head;
    _head = newNode;
  }

  const size = () => {
    let pointer = _head;
    let counter = 0;
    while (pointer) {
      counter++;
      pointer = pointer.nextNode;
    }
    return counter;
  }

  const at = (index) => {
    if (index < 0) {
      console.log('out of range')
      return null;
    }
    let pointer = _head;
    let counter = 0;
    while (counter < index && pointer) {
      pointer = pointer.nextNode;
      counter++;
    } 
    return pointer
  }

  const head = () => {
    return _head;
  }

  const tail = () => {
    let pointer = _head;
    if (!pointer) {
      return null
    }
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  const pop = () => {
    if (!_head) {
      return 
    }
    if (!_head.nextNode) {
      _head = null;
      return
    }
    let pointer = _head;
    let previous = _head;
    while (pointer.nextNode.nextNode) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = null;
  }
  
  const contains = (value) => {
    let pointer = _head;
    while (pointer.nextNode) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }

  const find = (value) => {
    let pointer = _head;
    let i = 0;
    while (pointer.nextNode) {
      if (pointer.value === value) {
        return i
      }
      pointer = pointer.nextNode;
      i++;
    }
    return null
  }

  const toString = () => {
    let str = '';
    let pointer = _head;
    while( pointer ) {
      str = str + `(${pointer.value})` + " => "
      pointer = pointer.nextNode
    }
    str = str + 'null'
    return str
  }

  const insertAt = (value, index) => {
    if (index < 0) {
      console.log('out of range')
      return null
    } 
    if (index === 0) {
      prepend(value)
      return
    }
    let nodeToInsert = Node(value);
    let pointer = _head;
    let previousNode = null;
    let i = 0;
    while (i < index && pointer){
      previousNode = pointer;
      pointer = pointer.nextNode
      i++;
    }
    if (i === index) {
      previousNode.nextNode = nodeToInsert;
      nodeToInsert.nextNode = pointer;
      return
    }
    console.log('out of range')
    return null
  }

  const removeAt = (index) => {
    if (index < 0) {
      console.log('out of range')
      return null
    }
    if (index === 0) {
      _head = _head.nextNode;
      return
    }
    let pointer = _head.nextNode;
    let previousNode = _head;
    let i = 1;
    while (i < index && pointer.nextNode){
      pointer = null || pointer.nextNode;
      previousNode = previousNode.nextNode;
      i++;
    }
    if (pointer && i === index){
      previousNode.nextNode = pointer.nextNode;
    }
    return
  }
  return (
    {
      append,
      prepend,
      at,
      size,
      head,
      tail,
      pop,
      contains,
      find,
      toString,
      insertAt,
      removeAt
     
    }
  )
}

let testList = LinkedList();
testList.append('apples');
testList.append('bananas');
testList.append('grapes');
testList.prepend('pears');
testList.insertAt('mangos',4);
console.log(testList.toString())
testList.removeAt(4)
console.log(testList.toString())
