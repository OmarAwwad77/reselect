import { createSelector } from 'reselect';
import { AppState } from '../root.reducer';
import { Importance } from './todos.types';

interface Props {
	importance: Importance;
}

const selectToDosState = (state: AppState) => state.toDos;
const selectImportance = (state: AppState, props: Props) => props.importance;

const selectAllToDos = createSelector(
	[selectToDosState],
	(state) => state.toDos
);

export const selectPropsToDos = () =>
	createSelector([selectAllToDos, selectImportance], (toDos, importance) =>
		toDos.filter((toDo) => toDo.importance === importance)
	);
