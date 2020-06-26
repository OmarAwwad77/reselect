import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ToDo } from '../../redux/todos/todos.types';
import { AppState } from '../../redux/root.reducer';
import {
	// makeSelectToDos,
	selectPropsToDos,
} from '../../redux/todos/todos.selectors';

interface OwnProps extends Pick<ToDo, 'importance'> {}
interface LinkStateToProps {
	toDos: ToDo[];
}
type Props = OwnProps & LinkStateToProps;

const DisplayToDos: React.FC<Props> = ({ importance, toDos }) => {
	console.log(`${importance}: rendering`, toDos);

	return (
		<div className='display-todos'>
			<h3>{importance}</h3>
			<ul className='list'>
				{toDos.map((toDo) => (
					<li className='list-item' key={toDo.title}>
						{toDo.title}
					</li>
				))}
			</ul>
		</div>
	);
};

// const mapStateToProps = createStructuredSelector<
// 	AppState,
// 	OwnProps,
// 	LinkStateToProps
// >({
// 	toDos: selectPropsToDos,
// });

const makeMapStateToProps = () => {
	const selectToDos = selectPropsToDos();
	return createStructuredSelector<AppState, OwnProps, LinkStateToProps>({
		toDos: selectToDos,
	});
};

export default connect(makeMapStateToProps)(DisplayToDos);
