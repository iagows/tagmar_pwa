import useCounter from "./stores/slices/counter/useCounter";

function App() {
	const { value, increment, decrement } = useCounter();
	return (
		<div>
			<p>
				Valor: <span>{value}</span>
			</p>
			<input type="button" onClick={increment} value="+" />
			<input type="button" onClick={decrement} value="-" />
		</div>
	);
}

export default App;
