import { Box, Grid } from "@mui/material";
import bgEmpty from "../../assets/images/empty.png";
import bgFilled from "../../assets/images/some.png";
import useFicha from "../../stores/slices/fichas/useFicha";
import PageContainer from "../PageContainer";
import UnderConstruction from "../UnderConstruction";
import FichaCard from "./FichaCard";

const FichasContainer = () => {
	const { list } = useFicha();
	const bg = `url(${list.length > 0 ? bgFilled : bgEmpty})`;

	return (
		<PageContainer bg={bg}>
			<UnderConstruction descricao="Fazer os cards funcionarem" />
			<Box sx={{ flexGrow: 1 }}>
				<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{list.map((f) => (
						<Grid item xs={12} key={f.id} md={6} lg={4}>
							<FichaCard ficha={f} />
						</Grid>
					))}
				</Grid>
			</Box>
		</PageContainer>
	);
};

export default FichasContainer;
