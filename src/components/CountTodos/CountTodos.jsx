import { useContext } from 'react';
import { TodoContext } from '../../provider/TodoContext';

const CountTodos = () => {
	const [todos] = useContext(TodoContext);
	const completedTask = todos.filter((todo) => todo.completed === true);

	return (
		<div>
			<h2>Total Task: {todos.length}</h2>
			<h2>Completed Task: {completedTask.length}</h2>
		</div>
	);
};

export default CountTodos;
