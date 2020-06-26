import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/root.reducer';
import { increment } from '../../redux/counter/counter.actions';
import { Dispatch } from 'redux';

interface OwnProps {}
interface LinkStateToProps {
	counter: number;
}
interface LinkDispatchToProps {
	increment: typeof increment;
}

type Props = OwnProps & LinkStateToProps & LinkDispatchToProps;

const Counter: React.FC<Props> = ({ counter, increment }) => {
	useEffect(() => {
		// setInterval(increment, 1000);
	}, []);

	return (
		<div className='counter'>
			<span>{counter}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchToProps => ({
	increment: () => dispatch(increment()),
});

const mapStateToProps = (state: AppState): LinkStateToProps => ({
	counter: state.counter.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
