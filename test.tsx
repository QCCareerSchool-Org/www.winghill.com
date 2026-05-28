/*
Create a react component that takes a `number` prop named "interval" and an optional `number` prop named "initialCount".

The component will display a number inside a div. The number will start at "initialCount", if provided, otherwise 0.

Every "interval" milliseconds the number displayed should increase by 1.
*/

/* This is the desired solution: */

import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface Props {
  interval: number;
  initialCount?: number;
}

// either export the function here, or at least export as default
export const TimerComponent: FC<Props> = ({ interval, initialCount }) => { // alternatively, { interval, initialCount = 0 }

  // store the count in a useState hook
  const [ count, setCount ] = useState(initialCount ?? 0); // ?? is preferred over || or ternary

  // use a useEffect hook for the interval
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // not, for example, setCount(count + 1);
    }, interval);

    // clean up
    return () => { clearInterval(id); };
  }, [ interval ]); // include interval in the dependency array, and don't include initialCount

  // display the result
  return (
    <div>{count}</div>
  );
};
