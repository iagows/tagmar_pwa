import { Box, Button } from "@mui/material";
import bgEmpty from "../../assets/images/empty.png";
import bgFilled from "../../assets/images/some.png";
import useFicha from "../../stores/slices/fichas/useFicha";
import PageContainer from "../PageContainer";
import FichaCard from "./FichaCard";

const FichasContainer = () => {
	const { list } = useFicha();
	const bg = `url(${list.length > 0 ? bgFilled : bgEmpty})`;
	return (
		<PageContainer bg={bg}>
			<Box sx={{ flexGrow: 1 }}>
				{list.map((f) => (
					<FichaCard ficha={f} key={f.id} />
				))}
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Button variant="contained">Adicionar Ficha</Button>
			</Box>
		</PageContainer>
	);
};

export default FichasContainer;
