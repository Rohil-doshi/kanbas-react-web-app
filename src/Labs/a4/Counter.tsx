import React, { useState } from "react";
function Counter() {
    const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2 className="m-1">Counter: {count}</h2>
      <button className="btn btn-primary m-2" onClick={() => setCount(count + 1)}>Up</button>
      <button className = "btn btn-primary m-2" onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;