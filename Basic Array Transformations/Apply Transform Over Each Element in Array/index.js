var map = function(arr, fn) {
    let newArray = [];
  
    for (let i = 0; i < arr.length; i++) {
        const a = fn(arr[i], i);
        newArray.push(a);
    }
  
    return newArray; // Return the new array
};
 
map([1, 2, 3], function plusone(n) {
    return n + 1;
}); // Output: [2, 3, 4]

map([1, 2, 3], function plusI(n, i) {
    return n + i;
}); // Output: [1, 3, 5]