import React, { useState } from "react";
import "./Progress.scss";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (progress < 10) {
      setProgress(progress + 1);
    }
  };

  const handleResetClick = () => {
    setProgress(0);
  };

  const getColor = () => {
    if (progress < 3) {
      return "#ff0000";
    } else if (progress < 6) {
      return "#ffa500";
    } else {
      return "#2ecc71 ";
    }
  };
  // return (
  //   <div className="card reviewCard">
  //     <div className="todo-app">
  //       <h2>Review List</h2>
  //       <TypeInArea onSubmit={handleSubmit}/>

  //     </div>
  //   </div>
  // );

  return (
    <div className="card progressCard">
      <h2 className="cardTitle">Progress Tracker</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress * 10}%`, backgroundColor: getColor() }}
        >
          {" "}
        </div>
      </div>
      <div className="showResult">{progress}hours</div>
      <div className="btnWrap">
        <button onClick={handleButtonClick} className="progressBtn">
          + 1 hour
        </button>
        <button onClick={handleResetClick} className="progressBtn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Progress;
