import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<>
			<div className="container mx-auto px-5">
				<h1 className="text-4xl text-center font-semibold my-5">
					Todo List App
				</h1>
				<div className="w-full md:w-3/4 mx-auto">
					<AddTodo />
					<TodoList />
				</div>
			</div>
		</>
	);
}

export default App;
