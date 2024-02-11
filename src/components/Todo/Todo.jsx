/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { TodoContext } from '../../provider/TodoContext';

const Todo = ({ todo }) => {
	const [todos, setTodos] = useContext(TodoContext);
	const { id, todoTitle, completed, priority } = todo;

	const handleCompleteTodo = (e) => {
		const completedTodos = todos.map((todo) => {
			if (todo.id === e.target.value) {
				todo.completed = false;
				if (e.target.checked) {
					todo.completed = true;
				}
			}
			return todo;
		});
		setTodos(completedTodos);
	};

	return (
		<>
			<div className="bg-slate-300 rounded-lg pl-5 flex items-center justify-between">
				<div className="flex items-center space-x-5">
					<input
						type="checkbox"
						name=""
						id={id}
						value={id}
						onChange={handleCompleteTodo}
					/>
					<p>{todoTitle}</p>
				</div>
				<p>Priority: {priority}</p>
				<p>Status: {completed ? 'Completed' : 'Incompleted'}</p>
				<button
					type="submit"
					className="px-5 py-2 border border-gray-600 bg-slate-600 rounded-lg hover:bg-slate-500 text-white"
				>
					Delete
				</button>
			</div>
		</>
	);
};

export default Todo;
