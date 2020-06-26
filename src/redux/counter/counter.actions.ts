import { CounterActions } from './counter.types';

export const increment = (): CounterActions => ({
	type: 'INCREMENT',
});
