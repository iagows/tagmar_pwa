import DiceBox from "@3d-dice/dice-box-threejs";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

async function getBox(): Promise<DiceBox> {
	const diceBox = new DiceBox("#box", {
		theme_customColorset: {
			// background: [
			//   "#00ffcb",
			//   "#ff6600",
			//   "#1d66af",
			//   "#7028ed",
			//   "#c4c427",
			//   "#d81128"
			// ], // randomly assigned colors
			background: "#00ffcb",
			foreground: "#ffffff",
			texture: "marble", // marble | ice
			material: "metal", // metal | glass | plastic | wood
		},
		light_intensity: 1,
		gravity_multiplier: 600,
		baseScale: 100,
		strength: 2,
		sounds: true,
		onRollComplete: (results) => {
			console.log(`I've got results :>> `, results);
		},
	});

	await diceBox.initialize();
	return diceBox;
}

const NUMBERS = Array.from({ length: 20 }, (_, i) => i + 1);

function rodar(box: DiceBox): void {
	const value = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];

	box.roll(`1d20@${value}`);
}

type C = {
	box: DiceBox;
};

const temas = [
	"coin_default",
	"coin_silver",
	"radiant",
	"fire",
	"ice",
	"poison",
	"acid",
	"thunder",
	"lightning",
	"air",
	"water",
	"earth",
	"force",
	"psychic",
	"necrotic",
	"breebaby",
	"pinkdreams",
	"inspired",
	"bloodmoon",
	"starynight",
	"glitterparty",
	"astralsea",
	"bronze",
	"dragons",
	"birdup",
	"tigerking",
	"covid",
	"isabelle",
	"thecage",
	"test",
	"rainbow",
	"black",
	"white",
	"swrpg_abi",
	"swrpg_pro",
	"swrpg_dif",
	"swrpg_cha",
	"swrpg_boo",
	"swrpg_set",
	"swrpg_for",
	"swa_red",
	"swa_blue",
	"swa_black",
	"xwing_red",
	"xwing_green",
	"swl_atkred",
	"swl_atkblack",
	"swl_atkwhite",
	"swl_defred",
	"swl_defwhite",
] as const;

type THEME_COLOR_SET = (typeof temas)[number];

const Commands = ({ box }: C) => {
	const [sel, setSel] = useState<THEME_COLOR_SET>("poison");

	const handleChange = (event: SelectChangeEvent) => {
		setSel(event.target.value as THEME_COLOR_SET);
		box.updateConfig({
			theme_colorset: event.target.value as THEME_COLOR_SET,
		});
	};

	return (
		<FormControl sx={{ zIndex: 40 }}>
			<Button onClick={() => rodar(box)} color="primary">
				Jogar
			</Button>
			<Select
				displayEmpty
				inputProps={{ "aria-label": "Without label" }}
				labelId="Temas"
				id="temas"
				value={sel}
				label="Age"
				onChange={handleChange}
			>
				{temas.map((t) => (
					<MenuItem value={t} key={t}>
						{t}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
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
	const [box, setBox] = useState<DiceBox>();
	// mudar menu
	// mudar app bar
	// mudar head > title
	useEffect(() => {
		const startBox = async () => {
			const b = await getBox();
			b.roll("1d20");
			setBox(b);
		};
		if (!box) {
			startBox();
		}
	}, [box]);

	return (
		<div style={{ flex: 1 }}>
			{box !== undefined && <Commands box={box} />}
			<div id="box" style={BOX_CSS} />
		</div>
	);
};

export default PageDado;
