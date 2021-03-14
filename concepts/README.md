# React Hooks

## Concepts

### 16. How React Works
- React element is an JS object that contains all the info about child nodes
- When any update occurs - React makes a copy of new element and compares it with old element
- const diff = compare(newElement, oldElement)
- And just updates the diff instead of repainting the whole DOM
- That's why React is faster
- In Dom on clicking plus, only the number updates instead of the whole DOM

### 17. Custom useState Hook
- Keep track of all fns in chain in an array
    - Global states variable to Keep track of all states [[]]
    - Global call count to check which state data is requested - that's why hooks can not be in conditional blocks
    - on useState call - update global state and re render the react component
- Rule: can not have hooks in condition
