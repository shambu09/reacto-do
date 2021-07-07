import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todo, done, id, edit, cls, submit }) {
	let _todo = todo;
	return (
		<div className="todo">
			<div
				onBlur={(e) => {
					submit(e.target.textContent, id);
				}}
				contentEditable={cls ? "true" : "false"}
				className="wrap text">
				{_todo}
			</div>
			<div
				className="icons"
				onClick={() => {
					done(id);
				}}>
				<RiCloseCircleLine />
			</div>
			<div
				className="icons"
				onClick={() => {
					edit(id);
				}}>
				<TiEdit />
			</div>
		</div>
	);
}

export default Todo;
