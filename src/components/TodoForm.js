import React from "react";
import { BiPlusCircle } from "react-icons/bi";

function TodoForm({handleSubmit}) {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="todo">
					<div className="text">
						<input id="input-todo" placeholder="Enter task" />
					</div>
					<div type="submit" className="icons">
						<BiPlusCircle htmlFor="input-todo"/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default TodoForm;
