import { ToDosState, ToDosActions } from './todos.types';

const initialState: ToDosState = {
	toDos: [],
};

const toDosReducer = (
	state = initialState,
	action: ToDosActions
): ToDosState => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				toDos: [...state.toDos, action.toDo],
			};

		case 'REMOVE_TODO':
			return {
				...state,
			};

		default:
			return state;
	}
};

export default toDosReducer;
