function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div>
          <h3>Counter {counter}</h3>
          <button className="btn btn-primary m-2" onClick={() => setCounter(counter + 1)}>
            Increment</button>
          <button className="btn btn-primary m-2" onClick={() => setCounter(counter - 1)}>
            Decrement</button>
        </div>
      );
    }
    export default ChildStateComponent;