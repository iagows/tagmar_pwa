import {
	FormControl,
	FormControlLabel,
	FormGroup,
	Switch,
} from "@mui/material";
import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import useConfig from "../stores/slices/config/useConfig";
import { THEME_OPTIONS } from "../theme";

const SWITCH_CSS = {
	backgroundColor: THEME_OPTIONS.palette?.background?.paper,
	borderRadius: 10,
	justifyContent: "space-between",
	paddingLeft: "16px",
} as const;

const PageConfiguracoes = () => {
	const { isBuscaInexata, isDado3d, swapBusca, swapDado } = useConfig();

	return (
		<PageContainer>
			<UnderConstruction descricao="Ainda não funciona nada. Revisar" />
			<FormControl component="fieldset" variant="standard">
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
						label="Buscar pelo texto aproximado"
						control={<Switch checked={isBuscaInexata} onChange={swapBusca} />}
					/>
					<FormControlLabel
						sx={SWITCH_CSS}
						labelPlacement="start"
						label="Exibir dado em 3D"
						control={<Switch checked={isDado3d} onChange={swapDado} />}
					/>
				</FormGroup>
			</FormControl>
		</PageContainer>
	);
};

export default PageConfiguracoes;
