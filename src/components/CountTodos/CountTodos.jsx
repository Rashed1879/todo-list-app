import { useContext } from 'react';
import { TodoContext } from '../../provider/TodoContext';

const CountTodos = () => {
	const [todos] = useContext(TodoContext);
	const completedTask = todos.filter((todo) => todo.completed === true);

	return (
		<>
			<div className="flex items-center my-2 gap-4">
				<h2 className="font-semibold">Total Task: {todos.length}</h2>
				<h2 className="font-semibold">
					Completed Task: {completedTask.length}
				</h2>
			</div>
		</>
	);
};

export default CountTodos;
