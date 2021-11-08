function insertionSort(arr) {
    for(let i = 1 ; i < arr.length; i++) {
        for(let j = i - 1 ; j >= 0; j-- ) {
            if(arr[i] < arr[j] && arr[i] >= arr[j- 1]) {
                arr.splice(j, 0, arr[i]);
                arr.splice(i + 1, 1);
                break;
            } else if (arr[i] < arr[j] && !j) {
                arr.unshift(arr[i]);
                arr.splice(i + 1, 1)
            }
        }
    }
    return arr;
}


console.log(insertionSort([3,1]));
console.log(insertionSort([1,7,13,-12,2,1,5,18]));