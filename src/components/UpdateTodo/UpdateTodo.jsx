/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TodoContext } from '../../provider/TodoContext';

const UpdateTodo = ({ isOpen, onClose, id }) => {
	const [todos, setTodos] = useContext(TodoContext);
	const todoToUpdate = todos.find((todo) => todo.id === id);

	const handleUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const todoTitle = form.todoTitle.value;
		const priority = form.priority.value;
		const updatedTodo = {
			...todoToUpdate,
			todoTitle,
			priority,
		};
		const updatedTodos = todos.map((todo) => {
			if (todo.id === updatedTodo.id) {
				return updatedTodo;
			}
			return todo;
		});

		setTodos(updatedTodos);

		onClose(); // Closing the modal after form submission
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
			<div className="bg-[#A78295] p-8 rounded-lg">
				<form
					onSubmit={handleUpdate}
					className="flex flex-col space-y-3"
				>
					<h2 className="text-2xl font-semibold">Update Todo</h2>
					<input
						className="outline-none text-gray-700 border border-gray-500 p-2 rounded-lg"
						name="todoTitle"
						type="text"
						placeholder="Type Title ...."
						defaultValue={todoToUpdate.todoTitle}
					/>
					<select
						defaultValue={todoToUpdate.priority}
						name="priority"
						className="text-black border border-gray-500 rounded-lg focus:border-gray-500 p-2"
					>
						<option value="" disabled>
							Select priority
						</option>
						<option
							value="low"
							className="text-green-500 font-bold"
						>
							Low
						</option>
						<option
							value="medium"
							className="text-orange-400 font-bold"
						>
							Medium
						</option>
						<option value="high" className="text-red-600 font-bold">
							High
						</option>
					</select>
					<div className="text-end">
						<button
							type="submit"
							className="px-10 py-2 border border-gray-600 bg-slate-600 rounded-lg hover:bg-slate-500 text-white"
						>
							Update
						</button>
						<button
							type="button"
							onClick={onClose}
							className="ml-3 px-6 py-2 border border-gray-600 bg-red-600 rounded-lg hover:bg-red-500 text-white"
						>
							Close
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateTodo;
