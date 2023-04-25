/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);
    
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      let temp = this.tail;
      temp.next = node;
      this.tail = node;
    }
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length ++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) throw new Error ('The list is empty.');
    else{
      return this.removeAt(this.length-1);
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) throw new Error ('The list is empty.');
   
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length -1 || idx < 0) {
      throw new Error("Invalid index.");
    }
  
    let curIdx = 0;
    let cur = this.head;

    while (curIdx < idx) {
      curIdx ++;
      cur = cur.next;
    }
    return cur.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let curIdx = 0;
    let cur = this.head;

    while (curIdx < idx) {
      curIdx ++;
      cur = cur.next;
    }

    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let curIdx = 0;
    let cur = this.head;
    let node = new Node(val);

    while (curIdx <= idx-1) {
      if (curIdx === idx-1 ) {
        node.next = cur.next;
        cur.next = node;
        this.length ++;
        break
      } else {
        curIdx ++;
        cur = cur.next;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length  || idx < 0) {
      throw new Error("Invalid index.");
    }

    let curIdx = 0;
    let cur = this.head;

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length --;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    else if (idx === this.length - 1) {
      
      let val = cur.next.val;
      cur.next = null;
      this.tail = cur;
      this.length --;
     
      return val;
    }

    while (curIdx <= idx-1) {
      if (curIdx === idx-1) {
        let val = cur.next.val;
        cur.next = cur.next.next;
        this.length --;
        return val;
      } else {
        curIdx ++;
        cur = cur.next;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
