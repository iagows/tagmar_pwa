import DiceBox from "@3d-dice/dice-box-threejs";
import {
	Button,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { DICE_THEMES_COLOR_SET, THEME_COLOR_SET } from "../../3d/util";

type C = {
	onRodar: () => void;
	box: DiceBox;
};

const DiceMenu = ({ onRodar, box }: C) => {
	const [sel, setSel] = useState<THEME_COLOR_SET>("poison");

	const handleChange = (event: SelectChangeEvent) => {
		setSel(event.target.value as THEME_COLOR_SET);
		box.updateConfig({
			theme_colorset: event.target.value as THEME_COLOR_SET,
		});
	};

	return (
		<FormControl sx={{ zIndex: 40 }}>
			<Button
				onClick={() => {
					onRodar();
				}}
				color="primary"
			>
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
				{DICE_THEMES_COLOR_SET.map((t) => (
					<MenuItem value={t} key={t}>
						{t}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
export default DiceMenu;
