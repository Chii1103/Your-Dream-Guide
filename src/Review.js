
import React, { useState, useEffect } from 'react';
import "./Review.scss";
// import TypeInArea from "./TypeInArea";

const Review = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Local StorageからTo-doリストを取得
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Local StorageにTo-doリストを保存
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 新しいタスクを追加
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue.trim(), disabled: false }]);
      setInputValue('');
    }
  };

  // タスクの状態を切り替え
  const toggleTask = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, disabled: !todo.disabled } : todo
    );
    setTodos(updatedTodos);
  };

  // タスクを編集
  const editTask = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  // 全てのタスクを削除
  const deleteAllTasks = () => {
    setTodos([]);
  };

  return (
    <div className='card'>
      <h2 className='cardTitle'>To-do List</h2>
      <div className="inputWrap">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new todo"
        />
        <button className='inputBtn'  onClick={addTask}>Add</button>
      </div>

      <ul className="scroll">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="todo-container">
              <input
                type="checkbox"
                checked={todo.disabled}
                onChange={() => toggleTask(index)}
              />
              <span
                contentEditable={!todo.disabled}
                onBlur={(e) => editTask(index, e.target.value.trim())}
                suppressContentEditableWarning={true}
                className={todo.disabled ? 'disabled' : ''}
              >
                {todo.text}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div>
        {/* <hr className="counter" /> */}
        <div className="counter-container">
          {/* <p className='showResult'>{todos.length} items total</p> */}
          <button className='todoBtn' onClick={deleteAllTasks}>Reset</button>
        </div>
      </div>
    </div>
  );
};



export default Review;