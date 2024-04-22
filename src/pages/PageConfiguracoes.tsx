import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormGroup,
	Switch,
} from "@mui/material";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import useConfig from "../stores/slices/config/useConfig";
import { THEME_OPTIONS } from "../theme";
import useGoogle from "../hooks/useGoogle";
import TagLabel from "../components/TagmarUI/Label";

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
				<Box>
					<img src={profile.picture} alt="User's profiles face" />

					<TagLabel>Name: {profile.name}</TagLabel>
					<TagLabel>Email Address: {profile.email}</TagLabel>
					<Button onClick={logout}>Sair</Button>
				</Box>
			) : (
				<Button variant="contained" onClick={onLogin}>
					Entrar com Google 🚀
				</Button>
			)}
		</PageContainer>
	);
};

export default PageConfiguracoes;
