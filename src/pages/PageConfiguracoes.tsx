import {
	Button,
	FormControl,
	FormControlLabel,
	FormGroup,
	Switch,
} from "@mui/material";
import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import useGoogle from "../hooks/useGoogle";
import useConfig from "../stores/slices/config/useConfig";
import { THEME_OPTIONS } from "../theme";

const SWITCH_CSS = {
	borderRadius: 10,
	paddingLeft: "16px",
	justifyContent: "space-between",
	backgroundColor: THEME_OPTIONS.palette?.background?.paper,
} as const;

const PageConfiguracoes = () => {
	const { isDado3d, swapDado3d, isBuscaInexata, swapBuscaInexata } =
		useConfig();

	const { login, logout, profile } = useGoogle();

	const onLogin = () => {
		login();
	};

	return (
		<PageContainer>
			<UnderConstruction descricao="Ainda não funciona nada. Revisar" />
			<FormControl component="fieldset" variant="standard">
				<FormGroup
					sx={{
						gap: "10px",
						maxWidth: 400,
						paddingTop: "20px",
					}}
				>
					<FormControlLabel
						sx={SWITCH_CSS}
						labelPlacement="start"
						label="Buscar pelo texto aproximado"
						control={
							<Switch checked={isBuscaInexata} onChange={swapBuscaInexata} />
						}
					/>
					<FormControlLabel
						sx={SWITCH_CSS}
						labelPlacement="start"
						label="Exibir dado em 3D"
						control={<Switch checked={isDado3d} onChange={swapDado3d} />}
					/>
				</FormGroup>
			</FormControl>
			{profile ? (
				<Button onClick={logout}>Sair</Button>
			) : (
				<Button variant="contained" onClick={onLogin}>
					Entrar com Google 🚀
				</Button>
			)}
		</PageContainer>
	);
};

export default PageConfiguracoes;
