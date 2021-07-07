import React, { useEffect, useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todo, done, id, edit, cls, submit }) {
	let _todo = todo;
	const cursor = useRef(null);

	useEffect(() => {
		cursor.current.focus();
	}, [cursor]);

	return (
		<div className="todo">
			<div
				ref={cursor}
				onBlur={(e) => {
					submit(e.target.textContent, id);
				}}
				contentEditable={cls ? "true" : "false"}
				suppressContentEditableWarning={true}
				spellCheck="false"
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
