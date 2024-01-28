### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
Reach is a Javascript library used for building user interfaces, popular with single-page applications. React hinges on component based architecture, where applications are a collection of reusable components, each managing their own state and functionality. Components can include pieces of UI and view logic as well as functions that know how to render themselves into HTML.

- What is Babel?
Babel is a transpiler for Javascript code. In the context of React, JSX is often used and Babel transforms JSX into regular Javascript, which browsers can understand.

- What is JSX?
Stands for Javascript XML and is a syntac extension for Javascript and often used in conjunction with React. It allows you to write HTML-like code directly within JS files.

- How is a Component created in React?
You can declare a component by importing React from 'react' and using const while returning JSX/HTML that will be rendered. The component, if separate from the app.js file will need to be exported and imported into the app.js file for use and called, for example, like this: <Welcome name="Alice"/>. "Alice" is passed as a string to the Welcome component in this ex. 

- What are some difference between state and props?
Props are read-only and passed from the parent component to the child component. Props are immutable, meaning a component cannot change its props.
State is mutable and internal to the component where it can be changed within it using a useState hook. State should be used for keeping track of changing data in a component, like user input, toggle states and time intervals. 

- What does "downward data flow" refer to in React?
A core concept in React that describes how data moves through a React application; from a parent component to a child component through props. When a child component receives props from a parent, it cannot modify those props directly. This pattern of data flow is also called 'unidirectional', which means the data has a single flow direction (top-down/parent-child). This makes data flow predictable and easy to debug.

- What is a controlled component?
Form data is handled by the state within the React component. Input, select elements have their values controlled by React. Changes to input fields are handled by functions like onChange, which upate the component's state.

- What is an uncontrolled component?
Works more like traditional HTMl form elements. React does not control the state of the input fields, the DOM does. Can be less cumbersome for simple forms, however, harder to validate or conditionally enable/disable buttons, etc.

- What is the purpose of the `key` prop when rendering a list of components?
It mainly helps React identify which items in the list have been changed, added, and/or removed. Helps maintain component state.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
When the list changes, items get added/removed/reordered things can go wrong. If the list item changes positions, the same index will point to a different item, leading to incorrect rendering.

- Describe useEffect.  What use cases is it used for in React components?
It's a hook that allows you to perform side effects in function components. A side effect is any operation that affects something outside the scope of the function, such as fetching data. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
Allows you to persistently store a mutable value that does not cause the component to re-render when it changes. 
Ex: you can set an input element to useRef(null); and then use that during an onButtonClick function and current to point to the mounted text input element. The component itself is not re-rendered.

- When would you use a ref? When wouldn't you use one?
When to use useRef: accessing DOM elements for text selection, focusing, media control, storing mutable values that need to persist across renders, but does not need to cause a re-render when it changes (storing intervals, timeouts, etc), and caching computed values. 
When not: managing data that causes a re-render when it changes (use useState instead).

- What is a custom hook in React? When would you want to write one?
When you want to implement functionality that you can't access in an existing React hook. Toggling state to manange light/dark mode is an example of the use of a custom hook.