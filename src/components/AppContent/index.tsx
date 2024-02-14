import styled from "styled-components";
import FichasContainer from "../FichasContainer";

const Container = styled.div({
	flex: 1,
	display: "flex",
});
const AppContent = () => {
	return (
		<Container>
			<FichasContainer />
		</Container>
	);
};

export default AppContent;
