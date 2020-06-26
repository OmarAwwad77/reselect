import { CounterActions, CounterState } from './counter.types';

const initialState: CounterState = {
	counter: 0,
};

const counterReducer = (
	state = initialState,
	action: CounterActions
): CounterState => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				counter: state.counter + 1,
			};

		default:
			return state;
	}
};

export default counterReducer;
