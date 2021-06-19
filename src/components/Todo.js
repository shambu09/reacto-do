import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todo }) {
	return (
		<div className="todo">
			<div className="wrap text">{todo}</div>
			<div className="icons">
				<RiCloseCircleLine />
			</div>
			<div className="icons">
				<TiEdit />
			</div>
		</div>
	);
}

export default Todo;
