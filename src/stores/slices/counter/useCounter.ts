import { decrement, increment, incrementByAmount } from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

type Out = {
	value: number;
	increment: () => void;
	decrement: () => void;
	incrementBy: (amount: number) => void;
};
const useCounter = (): Out => {
	const { value } = useAppSelector((s) => s.one);

	const dispatch = useAppDispatch();

	function incrementCounter() {
		dispatch(increment());
	}

	function decrementCounter() {
		dispatch(decrement());
	}

	function incrementBy(amount: number): void {
		dispatch(incrementByAmount(amount));
	}

	return {
		value,
		incrementBy,
		increment: incrementCounter,
		decrement: decrementCounter,
	};
};

export default useCounter;
