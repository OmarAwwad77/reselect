import { combineReducers } from 'redux';
import toDosReducer from './todos/todos.reducer';
import counterReducer from './counter/counter.reducer';

export const rootReducer = combineReducers({
	toDos: toDosReducer,
	counter: counterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
