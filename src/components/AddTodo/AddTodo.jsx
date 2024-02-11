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
			id: new Date().getTime(),
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
			<form onSubmit={addTodo}>
				<input
					name="todoTitle"
					type="text"
					placeholder="Add Todo Here..."
				/>
				<select defaultValue="" name="priority">
					<option value="" disabled>
						select priority
					</option>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
				<button type="submit">Add</button>
			</form>
		</>
	);
};

export default AddTodo;
