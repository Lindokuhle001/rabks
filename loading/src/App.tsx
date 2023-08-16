import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(previousCount => {
        if (previousCount < 100) {
          return previousCount + 10
        } else {
          clearInterval(interval);
          return previousCount
        }
      });

     
    },1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="loading">
        <div className="bar" style={{ width: `${count}%` }}></div>
      </div>
    </>
  );
}

export default App;
