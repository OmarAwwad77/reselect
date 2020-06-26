import { ToDosActions, ToDo } from './todos.types';

export const addToDo = (toDo: ToDo): ToDosActions => ({
	toDo,
	type: 'ADD_TODO',
});
