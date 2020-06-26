export interface CounterState {
	counter: number;
}

export const INCREMENT = 'INCREMENT';

export interface Increment {
	type: typeof INCREMENT;
}

export type CounterActions = Increment;
