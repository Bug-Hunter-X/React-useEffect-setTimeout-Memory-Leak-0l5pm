```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage of setTimeout with cleanup function
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```