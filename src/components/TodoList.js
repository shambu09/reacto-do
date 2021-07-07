import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

function TodoList({ todos, done, edit, cls, handleSubmit}) {
	const _todos = todos.map((todo, index) => {
		return <Todo key={uuidv4()} id={index} todo={todo} done={done} edit={edit} cls={cls===index} submit={handleSubmit}/>;
	});

	return <div>{_todos}</div>;
}

export default TodoList;
