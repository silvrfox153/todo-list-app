import { useState } from 'react';
import { Task } from './Task';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div>
      {/* ADD TASKS */}
      <div className="addTask">
        <h1 className="text-3xl font-medium text-center">Todo List</h1>
      </div>
      <div className="flex justify-center py-5">
        <input
          className="border-2 rounded-md"
          type="text"
          onChange={handleChange}
        />
        <button
          className="bg-red-500 py-2 px-5 rounded-md ml-2 text-white font-medium"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {/* LIST TASKS */}
      {todoList.map((task) => {
        return (
          <div className="flex justify-center align-middle py-2" key={task.id}>
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
