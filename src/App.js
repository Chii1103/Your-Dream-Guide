import "./App.scss";
import Quote from "./Quote";
import Weather from "./Weather";
import Progress from "./Progress";
import Review from "./Review";
import { useState } from "react";

function InputAndButton({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    onAdd(inputValue);
    setInputValue("");
  };
}

function App() {
  return (
    <div className="AppWrapper">
      <div className="appInner">
        <header>
          <img className="pizza1" src="../img/pizza.png"/>
          <img  src="../img/apple-whole.png" />
          <h1>Your Dream Guide</h1>
          <img src="../img/apple-whole.png" />
          <img className="pizza2" src="../img/pizza.png"/>
        </header>

        <div className="body-inner">
          <Quote />
          <div className="main-inner">
            <Weather />
            <Progress />
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
