import React from 'react';
import { connect } from 'react-redux';
import './add-todo.css';
import { Dispatch } from 'redux';
import { Importance } from '../../redux/todos/todos.types';
import { addToDo } from '../../redux/todos/todos.actions';

interface LinkDispatchToProps {
	addToDo: typeof addToDo;
}

type Props = LinkDispatchToProps;

const AddToDoes: React.FC<Props> = ({ addToDo }) => {
	const [input, setInput] = React.useState('');
	const [select, setSelect] = React.useState<Importance>('low');

	const onSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		addToDo({
			title: input,
			importance: select,
		});
	};

	return (
		<form className='form' onSubmit={onSubmitForm}>
			<div className='todo-input'>
				<label htmlFor='input'>Add ToDo</label>
				<input
					id='input'
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>

			<div className='todo-importance'>
				<label htmlFor='select'>Importance</label>
				<select
					defaultValue={select}
					onChange={(e) => setSelect(e.target.value as Importance)}
					name='importance'
					id='select'
				>
					<option value='very'>Very</option>
					<option value='medium'>Medium</option>
					<option value='low'>Low</option>
				</select>
			</div>
			<button type='submit'>Add</button>
		</form>
	);
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchToProps => ({
	addToDo: (toDo) => dispatch(addToDo(toDo)),
});

export default connect(null, mapDispatchToProps)(AddToDoes);
