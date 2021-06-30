import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todo, done, id }) {
	return (
		<div className="todo">
			<div className="wrap text">{todo}</div>
			<div
				className="icons"
				onClick={() => {
					done(id);
				}}>
				<RiCloseCircleLine />
			</div>
			<div className="icons">
				<TiEdit />
			</div>
		</div>
	);
}

export default Todo;
