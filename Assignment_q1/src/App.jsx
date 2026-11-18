
import React, { useState } from 'react';

function Counter() {

  // Declare state variable
  const [count, setCount] = useState(0);

  // Increment function
  function increment() {
    setCount(count + 1);
  }

  //decrement fUNCTION
  function decrement() {
    if (count == 0) {
      setCount(count)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className='main'>
      <h2>Counter Application</h2>

      <h3>Count: {count}</h3>
      <div className="btns" >
        <button onClick={increment} style={{background:"green"}}>
          + Increment
        </button>

        <button onClick={decrement} style={{background:"red"}}>
          - Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
