import { useState } from 'react';

const increment = (count: number) => count + 1;
const decrement = (count: number) => count - 1;
const reset = (count: number) => 0;

const Counter = () => {
  const [count, setCount] = useState(0);

  function changeCount(event: React.ChangeEvent<HTMLInputElement>) {
    setCount(event.target.valueAsNumber);
  }

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(increment)}>Increment</button>
        <button onClick={() => setCount(reset)}>Reset</button>
        <button onClick={() => setCount(decrement)}>Decrement</button>
      </section>
      <section className="controls">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(
              (
                event.currentTarget.elements.namedItem(
                  'set-to'
                ) as HTMLInputElement
              ).value
            );
          }}
        >
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            value={count}
            onChange={(event) => {
              changeCount(event);
            }}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
