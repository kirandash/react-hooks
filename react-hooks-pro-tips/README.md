# React Hook Pro Tips

- [PDF](http://www.theproblemsolver.nl/react-hooks-tips-only-the-pros-know-course.pdf)
- [src](https://github.com/mauricedb/react-hooks-tips-only-the-pros-know-course-complete/tree/main/src)
- Useful libraries and plugins
    - https://github.com/localForage/localForage
    - 

## 1 Basics

Basic Concepts

### 1.1 useState
- `const [person, setPerson] = useState(() => initialPerson)` We can passfn to useState. The fn can have some calculations to determine the initial values

### 1.2 useEffect
- code, 
- dependency: [] will run only once. Not passing any dependency will make the useEffect run on every render
- return fn: undefined or clean up fn 
- useEffect should never return a promise

### 1.3 useContext
- Accepts a context object and returns it's current value

## 2 Beyond the basics

### 2.1 Custom hooks
- Make component code reusable
- Great for extracting code from components
- Custom hooks can use other react hooks as well

### 2.2 Rules of hooks - Custom hooks names
- Custom hooks must be functions named `use...` has a capital letter
- https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    - `/^use[A-Z0-9].*$/.test(s)`
- Or export a default function with no name

### 2.3 useRef hook
- useRef returns a mutable ref object whose `.current` property is initialized to the passed argument
- One of it's main purposes is to get a **reference to a DOM element**
- But can be used to keep a **reference to any state**
    - holds the same state with each render
    - updating the state doesn't trigger a render
    - Ex: used in event handlers etc
- useRef() is stable and doesn't need to be added as a dependency
    - Greate way to share valeus b/w useEffect functions
- When using ref for child componenets - we need to use `forwardRef` in child components

### 2.4 useLayoutEffect hook
- Like useEffect() but fires **synchronously** after all DOM mutations
- useLayoutEffect() executes synchronously
    - after the render but before the component is painted
- While useEffect() executes **asynchronously**
    - after the component is painted on screen
- Normally use useEffect
    - use useLayoutEffect on specific scenarios

### 2.5 useRef and useState hooks and dependencies
- useRef() object and the useState updater fn are not required in dependency arrays
- https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
- https://github.com/facebook/react/blob/b537247678ea44399573088b74f4cf11b8114743/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L161
- useRefs are not required to be mentioned as dependencies in useEffect

### 2.6 Custom useDebounce hook
- Execute the code via setTimeout
- Cancel the setTimeout in cleanup fn

### 2.7 useCallback hook
- returns a memoized callback
- **Pass a fn and dependencies** to useCallback
    - Returns the same fn references with the same dependencies
- Useful when passing callbacks to child components
    - or other hooks
- **Note**: useMemo() can be used for values
- Use: Ex if a fn has a timer or async fn then without useCallback it will be called every time component re-renders. To avoid this, we should use useCallback which will initialize the fn only if dependencies change

### 2.8 Custom useWillUnmount() hook
- Createing an unmount hook with useEffect() is easy
    - Execute the passed code in the effect cleanup
    - Use a ref so there are no dependencies
- Use: Normally fn will not execute if component gets unmounted.
    - But if we use useWillUnmount, fn will execute even if component has unmounted. Ex: calling an API with a delay etc

### 2.9 Custom useThrottle hook
- similar to useDebounce
- A debounce fn is only called after it has not been called for a specific duration
- A throttle fn is called once after every timeout
- Ex: saving a form every 300ms

### 2.10 useDebugValue hook
- Used to display a label for Custom hooks in react dev tools
- Only recommended for reusable hooks

### 2.11 Rules of hooks
- Only call hooks at the top level
    - Don't call hooks inside loops, conditions or nested functions
- Only call hooks from react functions
    - Call hooks from react fn components
    - call hooks from custom hooks

### 2.12 Using multiple useState hooks
- Ex: 
    -  one useState for person object `[person, setPerson]`
    - second for the dirty and the valid states `[meta, setMeta]`

### 2.13 useReducer hook
- An alternative to useState() hook
- useReducer hooks is more powerful than useState
    - internally useState isi just a special useReducer
- Dispatch action objects and use a reducer function to create store
    - similar to how redux  works
- The state is still tied to a component
    - Not global like with Redux
- Much more testable

### 2.14 useMemo hook
- useMemo()
    -  returns a memoized value
- Uses the creator function to recompute a value
    - only when the dependencies change
- useMemo() is a performance optimization
    -  not a semantic guarantee
- The API allows for memoized values to be forgotten
    -  in react 17 this doesn't happen

## 3. Kimrof - A formik like forms library
### 3.1 Kimrof intro
-  A formik like forms utility
- Architecture
    - useReducer with Provider and context
    - Form will talk to context with useForm hook
    - Form fields will talk to context with useField hook

### 3.2 Kimrof context and provider
- provider component will manage the internal state
    - the object to edit
    - update to it's properties
    - validity/dirty states
    -  form submission
- context will  make this available
    - to  various hooks
