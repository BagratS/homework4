class Stack {
    constructor(arr = [], length = 0) {
        this._arr = arr;
        this._length = length;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        return this._length = length;
    }
    get arr() {
        return this._arr;
    }
    push(val) {
        this.length += 1;
        return this.arr.push(val);
    }
    pop() {
        this.length -= 1;
        return this.arr.pop();
    }
    peek() {
        return arr[this.length];
    }
    search(element) {
        this.arr.find(val => val === element);
    }
    isEmpty() {
        return this.length === 0;
    }
    print() {
        console.log(this.arr);
    }
}

const stack = new Stack;
stack.push(1);
stack.push(2);
console.log(stack.arr);
console.log(stack.length);