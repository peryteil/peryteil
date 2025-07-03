function solution (array) {
    array.sort((a,b) => a-b);
    const midIndex = Math.floor(array.length / 2);
    return array[midIndex];
}