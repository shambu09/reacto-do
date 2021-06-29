import React, { useRef } from "react";
import { BiPlusCircle } from "react-icons/bi";

function TodoForm({ handleSubmit }) {
	const form_submit  = useRef(null)
	return (
		<div>
			<form  onSubmit={(e)=>{
				e.preventDefault();
				handleSubmit(form_submit.current)
				}}>
				<div className="todo">
					<div className="text">
						<input ref={form_submit} placeholder="Enter task" />
					</div>
					<div className="icons" onClick={()=>handleSubmit(form_submit.current)}>
						<BiPlusCircle />
					</div>
				</div>
			</form>
		</div>
	);
}

export default TodoForm;
