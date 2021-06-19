import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	};

	const completeTodo = (id) => {
		let updateTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updateTodos);
	};

	return (
		<div>
			<h1>This is TodoList</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} />
		</div>
	);
}

export default TodoList;
