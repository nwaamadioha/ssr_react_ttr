import React from "react";
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)

  const increament = () => {
    return setCount(count + 1);
  }
  const decremeant = () => {
    return setCount(count - 1);
  }
  return (
    <>
      
      <p>{count}</p>
      <button onClick={increament}>Increase</button>
      <button onClick={decremeant}>Decrease</button>

    </>
  );
}

export default App;
