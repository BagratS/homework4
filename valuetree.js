function valueTree(obj) {
    if(obj.next === null) {
        return [obj.value];
    }
    return [obj.value, ...valueTree(obj.next)];
}

const tree = { 
    value: 12, 
    next: { 
    value: 20, 
    next: { 
    value: 30, 
    next: { 
    value: -10, 
    next: null 
    } 
    } 
    } 
    };
    
console.log(valueTree(tree));