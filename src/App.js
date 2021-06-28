import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

	const form_submit = (e) => {
		console.log(e.target.elements);
	}
	return (
		<div className="todo-app">
			<TodoForm handleSubmit={form_submit}/>
			<TodoList />
		</div>
	);
}

export default App;
