import styled from "styled-components";
import FichasContainer from "./components/FichasContainer";
import MenuTop from "./components/Menu/Top";

const Container = styled.div({
	height: "100%",
	display: "flex",
	flexFlow: "column",
});

function App() {
	return (
		<Container>
			<MenuTop />
			<FichasContainer />
		</Container>
	);
}

export default App;
