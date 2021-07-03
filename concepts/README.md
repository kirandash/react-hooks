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

### 34. async await with useEffect - self invoking fn
- Effect callbacks are synchronous to prevent race conditions. so can not use async with callbacks
- To solve this: we can use a **self invoking async fn** inside useEffect

### 35. Subscription Style async
- Subscription fn has a calback and a returned fn. The callback fn returns data from async api call. While the returned fn is used to unsubscribe from the subscription

### 36. Mimicking useEffect with render props and class component
- need to create a class component
- use lifecycle hooks: comonentDidMount and componentDidUnmount
- and for state use this.state
- render method should send posts to children
- useEffect has far less lines of codes
    -  `const [posts, setPosts] = useState(null);`

### 37. Composing hooks
- along with useEffect we can return the data so that the hook can be reused
- Compose Hooks together - useState and useEffect to create reusable piece of code
- Performs the following tasks:
    - init state
    - setup subscription
    - cleanup subscription
    - when uid changes
        - cleanup sub
        - setup new sub
- Can compose multiple hooks together ex: user and posts hook in one

### 38. Data Loading - hook for Authentication
- reusable useAuth code that returns two auth data

### 39. Customize Component render positions - Tabs
- How to reposition tabs hea and content 
- Note: we can use array to render JSX
      - `{tabsPosition === 'bottom' ? [panels,tabs] : [tabs, panels]}`

### 40. Too many props - Add disabled property
- Let's add disabled prop for tabs to make sure which tabs are to be disabled
    - `disabled={[1]}`: item at 1 will be disabled
- As we keep adding more props we will have to pass it to Tabs component
    - To make it cleaner we can break the component into smaller components - next topic

### 41. Replacing props with compound components
- With compound components: we can break the component into smaller components.
    - easier to control
    - don't have to pass props to parent
    - reusable

### 44. Share state with Context
- In compound components, we can share state with context
    - The implicit state which a child component might use from parent can be shared with context
- use `useContext, createContext, children`
- createContext
- use context.Provider to send value to all children
    - note that value is an object

### 45. Adding index to context
- Craete another context for tab list component

### 46. Backwards compatibility - Tab
- What if we want to change our reusable code ex: Tabs and Tabs2 here.
- If we upgrade our API, from Tabs to Tabs2, the code should still work
- So if user have already used a particular way of calling the API, we should not change the way component is called. But only improve the implementation.

### 47. Children Module from React for converting children
- Till now we were treating as if children is an array. But that's not always the case. So we must handle it properly in our code.
- `{Children.toArray(children)[activeIndex]}`
    - Make sure to convert string to array. if string is passed by error
- `Children.map`

### 48. Compound component - Datepicker
- DatePicker with customizable  order of date, locale, showYear, showDate etc. Eventually the props list will become longer
- It's better if we can cusotmize the component to make it compound component. So we can control it in a better way.
- While building compound component: pass the commonly shared data in context. if some data is needed only for a subcomponent: then we can just pass it as props
- Now: we can easily swap month, day, year in datepicker easily
- We can add additional content between them
