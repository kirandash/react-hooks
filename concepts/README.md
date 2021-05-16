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

### 18. Handling events without React
- With React we can easily use state and update data in DOM
- Without React we will have to use JS and update data with helf of getElementById

### 19. useRef and ref
- useRef is the React way of getting access to DOM elements
- like state: useRef maintains it's value after render

### 20. working with events using useEffect
- no need to check multiple events for state change
- useEffect helps us detect state change and perform some action
- always better to think in terms of state rather than events

### 27. Reusable abtraction with hooks
- hooks let us write abstract code which can be used across components

### 28. Composing with hooks
- Just lke React components let us componse multiple elements together. Ex: components inside components
- Similarly we can also compose hooks into hooks.

### 29. Save post in localStorage with useEffect - incomplete
- save message if user accidentally closes the dialog or navigates away from the page.

### 31. Fetch data with useEffect

### 32. Intro to clean up functions
- setState in async calls might take time to execute.  so in the mean time if  we navigate to a different component, react will through an error saying "Can't perform a React state update on an unmounted component"
- To fix this: we need to cleanup our async tasks in cleanup function

### 33. How to use clean up fn
- how to cancel async calls viz fetch call
- use a local boolean variable in useEffect 
