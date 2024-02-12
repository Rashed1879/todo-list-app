import { useContext, useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import { TodoContext } from '../../provider/TodoContext';

const TodoList = () => {
	const [todos] = useContext(TodoContext);
	const [filteredTodos, setFilteredTodos] = useState(todos);

	useEffect(() => {
		setFilteredTodos(todos);
	}, [todos]);

	const handleFilter = (filterAs) => {
		if (filterAs === 'all') {
			setFilteredTodos(todos);
		} else {
			const filteredData = todos.filter(
				(todo) => todo.priority === filterAs
			);
			setFilteredTodos(filteredData);
		}
	};

	return (
		<>
			<div className="space-y-3">
				<div>
					<select
						name="filter"
						defaultValue=""
						onChange={(e) => handleFilter(e.target.value)}
					>
						<option value="" disabled>
							Filter by Priority
						</option>
						<option value="all">All</option>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>
				{filteredTodos.length >= 1 ? (
					filteredTodos.map((todo) => (
						<Todo key={todo.id} todo={todo} />
					))
				) : (
					<p className="text-xl font-bold">
						There is no todo. Please add some..
					</p>
				)}
			</div>
		</>
	);
};

export default TodoList;
