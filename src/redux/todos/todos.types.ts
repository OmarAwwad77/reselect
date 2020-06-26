export interface ToDosState {
	toDos: ToDo[];
}

export type Importance = 'very' | 'medium' | 'low';

export interface ToDo {
	title: string;
	importance: Importance;
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export interface AddToDo {
	type: typeof ADD_TODO;
	toDo: ToDo;
}

export interface RemoveToDo {
	type: typeof REMOVE_TODO;
	id: number;
}

export type ToDosActions = AddToDo | RemoveToDo;
