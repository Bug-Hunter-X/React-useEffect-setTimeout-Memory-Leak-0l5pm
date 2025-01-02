# React useEffect setTimeout Memory Leak
This example demonstrates a common error in React applications when using `setTimeout` within the `useEffect` hook.  Without proper cleanup, this leads to a memory leak and potentially unexpected behavior. 

**Problem:** The provided `setTimeout` function continuously updates the count, creating a memory leak because it's never cleared.

**Solution:** This repository provides a corrected version of the code which includes a cleanup function to clear the timer before the component unmounts. This prevents the memory leak and ensures proper component behavior.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.