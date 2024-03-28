import { Box } from "@mui/material";
import useDiceBox from "../3d/useDiceBox";
import PageContainer from "../components/PageContainer";
import DiceMenu from "../components/TagmarUI/DiceMenu";
import TagLabel from "../components/TagmarUI/Label";
import useConfig from "../stores/slices/config/useConfig";

const BOX_CSS = {
	background: "#559955",
	position: "absolute",
	top: 63,
	right: 0,
	bottom: 0,
	left: 0,
	overflow: "hidden",
} as const;

const Dado3d = () => {
	const { box, rodar } = useDiceBox({ containerId: "#box" });
	return (
		<>
			{!!box && <DiceMenu box={box} onRodar={rodar} />}
			<Box id="box" style={BOX_CSS} />
		</>
	);
};

const Dado2d = () => <TagLabel>Dado 2D ainda não disponível</TagLabel>;

const PageDado = () => {
	const { isDado3d } = useConfig();

	return (
		<PageContainer>
			<Box>{isDado3d ? <Dado3d /> : <Dado2d />}</Box>
		</PageContainer>
	);
};

export default PageDado;
