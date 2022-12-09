import React from "react";

const TaskTwo = ({ age, setAge }) => {
  const showAge = () => {
    if (age >= 18) {
      alert("Добро пожаловать!");
    } else {
      alert("Вход запрещен!");
    }
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Введите ваш возраст..."
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button onClick={showAge}>Submit</button>
    </div>
  );
};

export default TaskTwo;
