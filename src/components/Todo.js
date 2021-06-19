import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todo }) {
	return (
		<div className="todo">
			<div className="text wrap">{todo}</div>
			<div className="icons">
				<RiCloseCircleLine />
				<TiEdit />
			</div>
		</div>
	);
}

export default Todo;
