import styled from "styled-components";
import AppContent from "./components/AppContent";
import Menu from "./components/Menu";

const Container = styled.div({
	display: "flex",
	flexFlow: "column",
});

function App() {
	return (
		<Container>
			<Menu />
			<AppContent />
		</Container>
	);
}

export default App;
