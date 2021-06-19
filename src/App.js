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
		"asgdkashdkahsdkahdkjah dkjahasdahsdgajhdgasjd jhasgdj has gdjhag djha gsdjhagsdhadgjahsgdjhagsdhjagdsjhgadhgsajhdgdjhasgdjhagsd hgasjhdgajhsdg dkashd kahsdkahd ashdkahdkajhs kadsh kahd",
	];
	todos = todos.map((todo, index) => {
		return <Todo todo={todo} />;
	});
	return <div className="todo-app">{todos}</div>;
}

export default App;
