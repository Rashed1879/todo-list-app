/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TodoContext } from '../../provider/TodoContext';
import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

const Todo = ({ todo }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
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

	const handleDelete = (id) => {
		const remainingTodos = todos.filter((todo) => todo.id !== id);
		setTodos(remainingTodos);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="bg-slate-300 rounded-lg px-5 py-3 flex flex-col items-center justify-between shadow-md">
				<div className="flex items-center justify-between w-full">
					<p className="text-2xl font-semibold">{todoTitle}</p>
					<div className="space-x-5">
						<button
							type="submit"
							onClick={openModal}
							className="text-2xl text-slate-800 hover:text-slate-600"
						>
							<MdEdit />
						</button>
						<button
							type="submit"
							onClick={() => handleDelete(id)}
							className="text-2xl text-red-500 hover:text-red-600"
						>
							<MdDeleteForever />
						</button>
					</div>
				</div>

				<div className="flex items-center justify-between w-full">
					<div className="flex items-center space-x-1">
						<span>Priority:</span>
						<p
							className={`${
								priority === 'low'
									? 'text-green-500'
									: priority === 'medium'
									? 'text-orange-400'
									: 'text-red-600'
							} font-bold`}
						>
							{priority}
						</p>
					</div>
					<div className="flex items-center space-x-2">
						<input
							type="checkbox"
							id={id}
							value={id}
							checked={completed ? 'checked' : ''}
							title="Mark as completed"
							onChange={handleCompleteTodo}
							className="cursor-pointer w-4 h-4"
						/>
						<p>Status: {completed ? 'Completed!' : 'Incomplete'}</p>
					</div>
				</div>
				<UpdateTodo isOpen={isModalOpen} onClose={closeModal} id={id} />
			</div>
		</>
	);
};

export default Todo;
