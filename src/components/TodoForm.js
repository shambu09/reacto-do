import React from "react";
import { BiPlusCircle } from "react-icons/bi";

function TodoForm({ handleSubmit }) {
	return (
		<div>
			<form>
				<div className="todo">
					<div className="text">
						<input htmlFor="submit" placeholder="Enter task" />
					</div>
					<div id="submit" className="icons" onClick={handleSubmit}>
						<BiPlusCircle htmlFor="input-todo" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default TodoForm;
