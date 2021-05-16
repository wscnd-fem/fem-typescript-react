import { useReducer } from 'react';

type CounterState = {
  count: number;
};

// type CounterAction = {
//   type:
//     | 'COUNTER_INCREMENT'
//     | 'COUNTER_DECREMENT'
//     | 'COUNTER_SET'
//     | 'COUNTER_RESET';
//   payload?: number;
// };

const initialState = {
  count: 0
};

type BasicCounterAction = {
  type: 'COUNTER_INCREMENT' | 'COUNTER_DECREMENT' | 'COUNTER_RESET';
};

type SetCounterAction = {
  type: 'COUNTER_SET';
  payload: number;
};

type CounterAction = BasicCounterAction | SetCounterAction;

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  if (action.type === 'COUNTER_INCREMENT') {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === 'COUNTER_DECREMENT') {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === 'COUNTER_SET') {
    return { ...state, count: action.payload };
  }

  if (action.type === 'COUNTER_RESET') {
    return { ...state, count: 0 };
  }

  return state;
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'COUNTER_INCREMENT' });
  const reset = () => dispatch({ type: 'COUNTER_RESET' });
  const set = (n: number) => dispatch({ type: 'COUNTER_SET', payload: n });
  const decrement = () => dispatch({ type: 'COUNTER_DECREMENT' });

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
