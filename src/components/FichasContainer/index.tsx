import styled from "styled-components";
import bgEmpty from "../../assets/images/empty.png";
import bgFilled from "../../assets/images/some.png";
import InputButton from "../InputButton";
import Label from "../Label";
import { CSS } from "../../util/constants";
import useFicha from "../../stores/slices/fichas/useFicha";

type IContainer = {
	hasItem: boolean;
};

const Container = styled.div<IContainer>(({ hasItem }) => ({
	width: "100%",
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
					<Label key={f._id}>{f.nome}</Label>
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
