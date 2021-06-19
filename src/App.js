import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
	let todos = [
		"Read OS 20 pages",
		"Read CN 20 pages",
		"Solve 2 CP problems",
		"Learn React",
		"Gate preparation",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra.",
    "Test Test Test......................................"
	];
	todos = todos.map((todo, index) => {
		return <Todo todo={todo} />;
	});
	return <div className="todo-app">{todos}</div>;
}

export default App;
