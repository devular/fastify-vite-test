import React, { useState } from "react";

export default function Index() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Value: {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>Hello World this is and very fast?</h1>
    </div>
  );
}

export const path = "/";
