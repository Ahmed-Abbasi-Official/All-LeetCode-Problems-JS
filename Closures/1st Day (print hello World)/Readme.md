# JavaScript Execution Process

This document explains the various stages and concepts involved in the execution of JavaScript code, focusing on memory allocation, hoisting, the call stack, and execution context.

## 1. Creation Phase (Memory Allocation)

During the **Creation Phase**, JavaScript sets aside memory for variables and functions before the code starts executing. This phase occurs before the **Execution Phase**:

- **Variables** declared with `var` are initialized with `undefined`.
- **Functions** are fully loaded into memory.

At this stage, JavaScript prepares the environment by setting up the necessary memory.

## 2. Hoisting

In JavaScript, variables and function declarations are **hoisted** to the top of their scope. This means they are processed before the actual code runs, allowing you to use them before they are defined.

### Example:

```javascript
console.log(myVar); // undefined
var myVar = 10;

console.log(myFunction()); // "Hello, World!"
function myFunction() {
  return "Hello, World!";
}
