import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Box, InputAdornment, TextField } from "@mui/material";
import ListaDeLetras from "../components/ListaDeLetras";
import PageContainer from "../components/PageContainer";
import { MAGIAS } from "../data/magias";

const PageMagias = () => {
	return (
		<PageContainer>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<TextField
					label="Nome da magia"
					variant="outlined"
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								<SearchOutlined />
							</InputAdornment>
						),
					}}
				/>
				<ListaDeLetras lista={MAGIAS} />
				<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
					{MAGIAS.map((m) => (
						<p key={m.id}>{m.nome}</p>
					))}
				</Box>
			</Box>
		</PageContainer>
	);
};

export default PageMagias;
