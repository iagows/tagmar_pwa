import { Box } from "@mui/material";
import useDiceBox from "../3d/useDiceBox";
import PageContainer from "../components/PageContainer";
import DiceMenu from "../components/TagmarUI/DiceMenu";

const BOX_CSS = {
	background: "#559955",
	position: "absolute",
	top: 63,
	right: 0,
	bottom: 0,
	left: 0,
	overflow: "hidden",
} as const;

const PageDado = () => {
	const { box, rodar } = useDiceBox({ containerId: "#box" });

	return (
		<PageContainer>
			<Box>
				{!!box && <DiceMenu box={box} onRodar={rodar} />}
				<Box id="box" style={BOX_CSS} />
			</Box>
		</PageContainer>
	);
};

export default PageDado;
