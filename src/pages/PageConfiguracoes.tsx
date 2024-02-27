import {
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Switch,
} from "@mui/material";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import { THEME_OPTIONS } from "../theme";

type Config = {
	magiaExata: boolean;
	agruparMagias: boolean;
};

const SWITCH_CSS = {
	backgroundColor: THEME_OPTIONS.palette?.background?.paper,
	borderRadius: 10,
	justifyContent: "space-between",
	paddingLeft: "16px",
} as const;

const PageConfiguracoes = () => {
	const [state, setState] = useState<Config>({
		magiaExata: true,
		agruparMagias: false,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};
	return (
		<PageContainer>
			<FormControl component="fieldset" variant="standard">
				<FormLabel component="legend">Ainda não funcional</FormLabel>
				<FormGroup
					sx={{
						maxWidth: 400,
						gap: "10px",
						paddingTop: "20px",
					}}
				>
					<FormControlLabel
						sx={SWITCH_CSS}
						labelPlacement="start"
						control={
							<Switch
								checked={state.magiaExata}
								onChange={handleChange}
								name="magiaExata"
							/>
						}
						label="Buscar magias pelo nome exato"
					/>
					<FormControlLabel
						sx={SWITCH_CSS}
						labelPlacement="start"
						control={
							<Switch
								checked={state.agruparMagias}
								onChange={handleChange}
								name="agruparMagias"
							/>
						}
						label="Agrupar magias"
					/>
				</FormGroup>
			</FormControl>
		</PageContainer>
	);
};

export default PageConfiguracoes;
