import { Box, Button } from "@mui/material";
import bgEmpty from "../../assets/images/empty.png";
import bgFilled from "../../assets/images/some.png";
import useFicha from "../../stores/slices/fichas/useFicha";
import { CSS } from "../../util/constants";
import FichaCard from "./FichaCard";

const GROW = { flexGrow: 1 } as const;

const FichasContainer = () => {
	const { list } = useFicha();
	return (
		<Box
			sx={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				backgroundSize: "cover",
				padding: CSS.padding.page,
				backgroundRepeat: "no-repeat",
				backgroundImage: `url(${list.length > 0 ? bgFilled : bgEmpty})`,
			}}
		>
			<div style={GROW}>
				{list.map((f) => (
					<FichaCard ficha={f} key={f.id} />
				))}
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<Button variant="contained">Adicionar Ficha</Button>
			</div>
		</Box>
	);
};

export default FichasContainer;
