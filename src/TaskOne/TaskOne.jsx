import React from "react";
import "./TaskOne.css";

const TaskOne = ({ state, setState, one, setOne }) => {
  const save = (e) => {
    setState(e.target.value);
  };
  const change = () => {
    setOne(state);
    setState("");
  };
  return (
    <div className="container">
      <div className="taskOne">
        <div className="block" style={{ backgroundColor: one }}></div>
        <input
          placeholder="Введите ваш цвет..."
          type="text"
          onChange={save}
          value={state}
        />
        <button onClick={change}>Change color</button>
      </div>
    </div>
  );
};

export default TaskOne;
