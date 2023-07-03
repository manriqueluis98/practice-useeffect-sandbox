import { useEffect, useState } from "react";
import Main from "./Main";

function App() {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect1 ran");
  }, []);

  useEffect(() => {
    console.log("UseEffect2 ran");
    if (toggleTwo) {
      console.log("toggleTwo slice of state is true so this code runs");
    }
  }, [toggleTwo]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <>
      {console.log("rendered or re-rendered")}
      <Main />
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>toggleTwo</button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
    </>
  );
}

export default App;
