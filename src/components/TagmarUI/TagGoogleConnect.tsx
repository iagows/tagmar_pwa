import { Google, Logout } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import useGoogle from "../../hooks/useGoogle";

const STYLE = {
	marginTop: 2,
} as const;

const TagGoogleConnect = () => {
	const { login, logout, usuario } = useGoogle();

	const onLogin = () => {
		login();
	};
	return (
		<Box sx={STYLE}>
			{usuario ? (
				<Button onClick={logout} startIcon={<Logout />}>
					Sair do Google
				</Button>
			) : (
				<Button variant="contained" onClick={onLogin} startIcon={<Google />}>
					Entrar com Google
				</Button>
			)}
		</Box>
	);
};

export default TagGoogleConnect;
