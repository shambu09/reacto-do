import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Controller() {
	const [todos, setTodos] = useState([
		"Learn React",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra. orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque phar",
		"Test Test Test... ",
		"Test2 Test2 Test2.....",
		"Hola, Amigos",
		"With great power comes great responsibility",
		"Lost in translation",
	]);

	const [editable, seteditable] = useState(-1);
	const removeTodo = (i) => {
		let _todos = todos.slice();
		_todos.splice(i, 1);
		setTodos(_todos);
		seteditable(-1);
	};

	const handleEdit = (i) => {
		seteditable(i);
	};

	const todo_submit = (form) => {
		const val = form.value;
		if (val === "") return;
		let _todos = [val].concat(todos);
		form.value = "";
		setTodos(_todos);
	};

	const edit_submit = (value, id) =>{
		const _todos = todos.slice();
		_todos[id] = value;
		setTodos(_todos);
		seteditable(-1);
	}

	return (
		<div className="todo-app">
			<TodoForm handleSubmit={todo_submit} todos={todos} />
			<TodoList
				todos={todos}
				done={removeTodo}
				edit={handleEdit}
				cls={editable}
				handleSubmit={edit_submit}
			/>
		</div>
	);
}

export default Controller;
