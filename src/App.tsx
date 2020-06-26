import React from 'react';
import './App.css';
import AddToDo from './components/add-todo/add-todo';
import Counter from './components/counter/counter';
import DisplayToDos from './components/display-todos/display-todos';

function App() {
	return (
		<div className='App'>
			<Counter />
			<AddToDo />
			<DisplayToDos importance='very' />
			<DisplayToDos importance='medium' />
			<DisplayToDos importance='low' />
		</div>
	);
}

export default App;
