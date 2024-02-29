import { InputAdornment, TextField } from "@mui/material";
import PageContainer from "../components/PageContainer";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { MAGIAS } from "../data/magias";

const LETRAS = [...new Set(MAGIAS.map((m) => m.nome[0]))];

const PageMagias = () => {
	return (
		<PageContainer>
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
			<div>
				{LETRAS.map((i) => (
					<p key={i}>{i}</p>
				))}
			</div>
			<div style={{ display: "flex", gap: 10 }}>
				{MAGIAS.map((m) => (
					<p key={m.id}>{m.nome}</p>
				))}
			</div>
		</PageContainer>
	);
};

export default PageMagias;
