import React, {useState, useEffect} from "react";
import Todo from "./Todo";

function TodoList() {
	const [todos, setTodos] = useState([]);
    let _todos = [
		"Read OS 20 pages",
		"Read CN 20 pages",
		"Solve 2 CP problems",
		"Learn React",
		"Gate preparation",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra. orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque phar",
		"Test Test Test... ",
		"Test2 Test2 Test2.....",
	];

    _todos = _todos.map((todo, index) => {
		return <Todo key={index} todo={todo} />;
	});

	return <div>{_todos}</div>;
}

export default TodoList;
