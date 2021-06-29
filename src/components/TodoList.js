import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
	const _todos = todos.map((todo, index) => {
		return <Todo key={index} todo={todo} />;
	});

	return <div>{_todos}</div>;
}

export default TodoList;
