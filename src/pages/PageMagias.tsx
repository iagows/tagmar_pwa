import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Box, InputAdornment, TextField } from "@mui/material";
import ListaDeLetras from "../components/ListaDeLetras";
import PageContainer from "../components/PageContainer";
import { MAGIAS } from "../data/magias";
import ListaDeNomes from "../components/ListaDeNomes";

const PageMagias = () => (
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
			<ListaDeNomes lista={MAGIAS} />
		</Box>
	</PageContainer>
);

export default PageMagias;
