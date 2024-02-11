import { useContext } from 'react';
import Todo from '../Todo/Todo';
import { TodoContext } from '../../provider/TodoContext';

const TodoList = () => {
	const [todos] = useContext(TodoContext);
	return (
		<>
			<div className="space-y-3">
				{todos.length >= 1 ? (
					todos.map((todo) => <Todo key={todo.id} todo={todo} />)
				) : (
					<p>There is no todo. Please add some..</p>
				)}
			</div>
		</>
	);
};

export default TodoList;
