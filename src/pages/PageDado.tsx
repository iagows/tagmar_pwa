import useDiceBox from "../3d/useDiceBox";
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
		<div style={{ flex: 1 }}>
			{!!box && <DiceMenu box={box} onRodar={rodar} />}
			<div id="box" style={BOX_CSS} />
		</div>
	);
};

export default PageDado;
