import React, { useState } from "react";
import { Text } from "theme-ui";

export default function Index() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Value: {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <Text variant="heading" as="h1">
        Hello World this is nice and very fast?
      </Text>
    </div>
  );
}

export const path = "/";
