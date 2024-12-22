# React useState Asynchronous Update

This repository demonstrates a common issue in React applications involving the asynchronous nature of the `useState` hook's update mechanism.  The example shows that directly accessing the state variable immediately after calling `setState` will yield the previous value, leading to potential bugs. The solution illustrates how to use functional updates and the `useEffect` hook to handle this correctly.

## Bug
The `bug.js` file contains a component that increments a counter using `useState`. However, it incorrectly attempts to access the updated count immediately after calling `setCount`. This results in the console logging the old value of the count instead of the new value.

## Solution
The `bugSolution.js` file provides a corrected version.  It uses a functional update callback for `setCount`, ensuring the latest state is used.  The example also shows how to access the updated state using `useEffect` and its dependency array to trigger updates only when the relevant state value changes. 