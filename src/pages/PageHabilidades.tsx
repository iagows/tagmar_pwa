import { InputAdornment, TextField } from "@mui/material";
import PageContainer from "../components/PageContainer";
import { SearchOutlined } from "@mui/icons-material";

const PageHabilidades = () => {
	return (
		<PageContainer>
			<TextField
				label="Nome da habilidade"
				variant="outlined"
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							<SearchOutlined />
						</InputAdornment>
					),
				}}
			/>
			<div style={{ display: "flex", gap: 10 }}>
				<p>a</p>
				<p>b</p>
				<p>c</p>
				<p>d</p>
				<p>e</p>
				<p>...</p>
				<p>z</p>
			</div>
			<div>
				<p>Habilidade</p>
				<p>Habilidade</p>
				<p>Habilidade</p>
				<p>Habilidade</p>
				<p>Habilidade</p>
				<p>Habilidade</p>
			</div>
		</PageContainer>
	);
};

export default PageHabilidades;
