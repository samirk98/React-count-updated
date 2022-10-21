import React, { useState, useEffect, useRef } from "react";
import MinusBtn from "./components/MinusBtn";
import PlusBtn from "./components/PlusBtn";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppBar from "./components/AppBar"
const App = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  useEffect(() => {
    countRef.current.value = count;
    console.log(countRef.current.value);
  }, [count]);
  const handleDecraseCount = () => {
    if (count === 0) {
      alert("0 a catdin");
      
    } else {
      setCount(count - 1);
    }
  };
  const handleIncreamentCount = () => {
    if (count === 10) {
      alert("10 a catdin eli");
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className="App">
      <Link to="Plusbtn">PlusBtn</Link>
    <Routes>
      <Route path="/PlusBtn" element={<PlusBtn/>}/>
    </Routes>
      <span ref={countRef}>{count}</span>
    </div>
  );
};
export default App;
