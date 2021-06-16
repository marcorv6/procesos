const quicksort = (arr) => {
    if(arr.length <= 1) return arr
    const pivot = arr[0];
    const left = [];
    const right = [];
    for(let i=1; i <= arr.length-1; i++){
        pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quicksort(left), pivot, ...quicksort(right)]
}

export {quicksort}