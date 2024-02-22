import styled from "styled-components";
import bgEmpty from "../../assets/images/empty.png";
import bgFilled from "../../assets/images/some.png";
import useFicha from "../../stores/slices/fichas/useFicha";
import { CSS } from "../../util/constants";
import { Button } from "@mui/material";
import FichaCard from "./FichaCard";

type IContainer = {
	$hasItem: boolean;
};

const GROW = { flexGrow: 1 } as const;

const Container = styled.div<IContainer>(({ $hasItem }: IContainer) => ({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	backgroundSize: "cover",
	padding: CSS.padding.page,
	backgroundRepeat: "no-repeat",
	backgroundImage: `url(${$hasItem ? bgFilled : bgEmpty})`,
}));

const FichasContainer = () => {
	const { list } = useFicha();
	return (
		<Container $hasItem={list.length > 0}>
			<div style={GROW}>
				{list.map((f) => (
					<FichaCard ficha={f} key={f.id} />
				))}
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<Button variant="contained">Adicionar Ficha</Button>
			</div>
		</Container>
	);
};

export default FichasContainer;
