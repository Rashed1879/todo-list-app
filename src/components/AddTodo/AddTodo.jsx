import { useContext, useEffect } from 'react';
import { TodoContext } from '../../provider/TodoContext';

const AddTodo = () => {
	const [todos, setTodos] = useContext(TodoContext);

	const addTodo = (e) => {
		e.preventDefault();
		const form = e.target;
		const todoTitle = form.todoTitle.value;
		const priority = form.priority.value;

		const newTodo = {
			id: new Date().getTime().toString(),
			todoTitle,
			priority,
			completed: false,
		};

		if (todoTitle === '' || priority === '') {
			alert('These Field Cannot be empty');
			return;
		}
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
		form.reset();
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<form
				onSubmit={addTodo}
				className="my-5 flex flex-col space-y-3 p-5 bg-[#331D2C] rounded-lg"
			>
				<h2 className="text-2xl font-semibold text-[#EFE1D1]">
					Add Todo
				</h2>
				<input
					className="outline-none text-gray-700 border border-gray-500 p-2 rounded-lg"
					name="todoTitle"
					type="text"
					placeholder="Type Title ...."
				/>
				<select
					defaultValue=""
					name="priority"
					className="text-black border border-gray-500 rounded-lg focus:border-gray-500 p-2"
				>
					<option value="" disabled>
						select priority
					</option>
					<option value="low" className="text-green-500 font-bold">
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
						Add
					</button>
				</div>
			</form>
		</>
	);
};

export default AddTodo;
