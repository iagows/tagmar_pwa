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
	teste1: boolean;
	teste2: boolean;
};

const SWITCH_CSS = {
	backgroundColor: THEME_OPTIONS.palette?.background?.paper,
	borderRadius: 10,
};

const PageConfiguracoes = () => {
	const [state, setState] = useState<Config>({
		teste1: true,
		teste2: false,
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
				<FormLabel component="legend">Testando</FormLabel>
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
								checked={state.teste1}
								onChange={handleChange}
								name="teste1"
							/>
						}
						label="Teste 1"
					/>
					<FormControlLabel
						sx={SWITCH_CSS}
						labelPlacement="start"
						control={
							<Switch
								checked={state.teste2}
								onChange={handleChange}
								name="teste2"
							/>
						}
						label="Teste 2"
					/>
				</FormGroup>
			</FormControl>
		</PageContainer>
	);
};

export default PageConfiguracoes;
