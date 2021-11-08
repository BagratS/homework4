function findAPair(arr, sum) {
    arr.sort((a,b) => a - b);
    const res = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] > sum/2) {
            break;
        }
        const second = arr.find((val, index) => (sum - arr[i] === val) && (i !== index));
        if(second) {
            res.push([arr[i], second])
        };
    }
    return res;
}

console.log(findAPair([8, 7, 2, 5, 3, 1], 10));