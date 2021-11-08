class Stack {
    constructor() {
        this.arr = [];
        this.length = 0;
    }
    push(val) {
        this.length += 1;
        return this.arr.push(val);
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        this.length -= 1;
        return this.arr.pop();
    }
    peek() {
        return this.arr[this.length - 1];
    }
    search(element) {
        return this.arr.find(val => val === element);
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
console.log(stack.peek());
console.log(stack.search(2));