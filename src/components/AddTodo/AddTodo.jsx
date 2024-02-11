import { useContext } from 'react';
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

	return (
		<>
			<form
				onSubmit={addTodo}
				className="my-5 flex flex-col space-y-3 border border-emerald-400 p-5 bg-emerald-300 rounded-lg"
			>
				<h2 className="text-2xl font-semibold">Add Todo</h2>
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
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
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
