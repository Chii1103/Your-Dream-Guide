import React, { useState } from "react";

const TypeInArea = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className="typeTodoWrap">
      <input className="reviewInput"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="what to do"
      />
      <button className="addBtn"  onClick={handleSubmit}>Add</button>
      {/* <p>{inputValue}</p> */}
    </div>
  );
};

export default TypeInArea;
