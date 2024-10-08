



var reduce = function(nums, fn, init) {
    let val = init; // Start with the initial value
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]); // Apply the function to the accumulated value and current item
    }
    return val; // Return the accumulated value
};

console.log(reduce([1, 2, 3, 4], (val, num) => {
    return val + num; // Sum function
}, 0));

console.log(reduce([1, 2, 3, 4], (val, num) => {
    return val + num * num; // Sum of squares function
}, 100));
