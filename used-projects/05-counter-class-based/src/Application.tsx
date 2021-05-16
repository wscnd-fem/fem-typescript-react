import React, { ChangeEvent, Component } from 'react';

type MyProps = {
  incident: string;
};

type MyState = {
  count: number;
};

class Counter extends Component<MyProps, MyState> {
  state: MyState = {
    count: 0
  };

  increment() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  decrement() {
    this.setState(({ count }) => ({ count: count - 1 }));
  }

  // reset: () => void
  reset() {
    this.setState({ count: 0 });
  }

  changeCount(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    this.setState({
      count: event.target.value ? event.target.valueAsNumber : 0
    });
  }

  submitCount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const inputCount = event.currentTarget.elements.namedItem(
      'set-to'
    ) as HTMLInputElement;
    console.log(inputCount.value);
  }

  render() {
    const { incident } = this.props;
    const { count } = this.state;

    return (
      <main className="Counter">
        <h1>Days Since Last Incident </h1>
        <h2>{incident}</h2>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={() => this.increment()}>Increment</button>
          <button onClick={() => this.reset()}>Reset</button>
          <button onClick={() => this.decrement()}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={(event) => {this.submitCount(event)}}>
            <label htmlFor="set-to">Set Count</label>
            <input
              id="set-to"
              type="number"
              value={count}
              onChange={(event) => this.changeCount(event)}
            />
            <input type="submit" name="aloo" />
          </form>
        </section>
      </main>
    );
  }
}

class Application extends Component {
  render() {
    return <Counter incident="Coffee Spill" />;
  }
}

export default Application;
