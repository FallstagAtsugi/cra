import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
    console.log(num);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>こんにちは！</h1>
      <ColorfulMessage color="blue" messeage="お元気ですか？" />
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <p>{num}</p>
    </>
  );
};

export default App;
