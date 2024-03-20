import DiceBox from "@3d-dice/dice-box-threejs";
import {
	Button,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useCallback, useState } from "react";
import { DICE_THEMES_COLOR_SET, ThemeColorSet } from "../../3d/util";
import { VoidCallback } from "../../util/commonTypes";

type C = {
	onRodar: VoidCallback;
	box: DiceBox;
};

const DiceMenu = ({ onRodar, box }: C) => {
	const [sel, setSel] = useState<ThemeColorSet>("poison");
	const [working, setWorking] = useState<boolean>(true);

	const handleChange = async (event: SelectChangeEvent) => {
		const set = event.target.value as ThemeColorSet;

		setSel(set);
		change(set);
	};

	const change = useCallback(
		async (set: ThemeColorSet) => {
			setWorking(true);
			await box.updateConfig({
				theme_colorset: set,
			});
			setWorking(false);
		},
		[box],
	);

	return (
		<FormControl sx={{ zIndex: 40 }}>
			<Button
				onClick={() => {
					onRodar();
				}}
				color="primary"
				disabled={working}
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
