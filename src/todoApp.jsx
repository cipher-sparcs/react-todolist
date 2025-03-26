import React, { useState } from "react";
import './todoApp.css'





const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = window.localStorage.getItem("todos"); //Todos 불러오기기
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const saveToLocalStorage = (updatedTodos) => {
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos)); //Todo 저장장
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      const updatedTodos = [...todos, newTodo.trim()];
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
      setNewTodo("");
    }
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  const saveEdit = () => {
    if (newTodo.trim() && editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo.trim();
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
      setNewTodo("");
      setEditIndex(null);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {editIndex !== null ? (
        <button onClick={saveEdit}>저장</button>
      ) : (
        <button onClick={addTodo}>추가</button>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => editTodo(index)}>수정</button>
            <button onClick={() => deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;