import { useState } from "react";
import "./Counter.css";

interface CounterProps {
  initialCount?: number;
}

export function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter" data-testid="counter">
        {count}
      </div>
      <div className="controls">
        <button
          onClick={increment}
          className="button increment"
          data-testid="increment-button"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="button decrement"
          data-testid="decrement-button"
        >
          -
        </button>
        <button
          onClick={reset}
          className="button reset"
          data-testid="reset-button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
