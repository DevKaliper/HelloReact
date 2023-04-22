import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(false);

  const text = count ? "Goodbye World" : "Hello World";

  const handleClick = () => {
    setCount(!count);
  };

  return (
    <>
      <h1>{text}</h1>

      <button onClick={handleClick}>click me</button>
    </>
  );
}

export default App;
