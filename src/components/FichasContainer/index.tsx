import styled from "styled-components";
import bgEmpty from "../../assets/images/empty.png";
import bgFilled from "../../assets/images/some.png";
import useFicha from "../../stores/slices/fichas/useFicha";
import { CSS } from "../../util/constants";
import InputButton from "../InputButton";
import FichaCard from "./FichaCard";

type IContainer = {
	hasItem: boolean;
};

const Container = styled.div<IContainer>(({ hasItem }) => ({
	width: "100%",
	maxWidth: "100%",
	display: "flex",
	flexDirection: "column",
	backgroundSize: "cover",
	padding: CSS.padding.page,
	backgroundRepeat: "no-repeat",
	backgroundImage: `url(${hasItem ? bgFilled : bgEmpty})`,
}));

const FichasContainer = () => {
	const { list } = useFicha();
	return (
		<Container hasItem={false}>
			<div style={{ flexGrow: 1 }}>
				{list.map((f) => (
					<FichaCard ficha={f} key={f._id} />
				))}
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<InputButton text="Adicionar ficha" isPrimary />
				<InputButton text="Adicionar ficha" />
				<div>
					<InputButton text="A" />
				</div>
			</div>
		</Container>
	);
};

export default FichasContainer;
