import AddTodo from './components/AddTodo/AddTodo';
import CountTodos from './components/CountTodos/CountTodos';

import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<>
			<div className="bg-[#A78295] min-h-screen">
				<div className="container mx-auto px-5">
					<h1 className="text-4xl text-center font-semibold py-5">
						Todo List App
					</h1>
					<div className="w-full md:w-3/4 mx-auto">
						<AddTodo />
						<CountTodos />
						<TodoList />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
