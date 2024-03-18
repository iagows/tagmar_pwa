import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import usePageTopBar from "../hooks/usePageTopBar";
import { Constants } from "../util/constants";

const PageHabilidades = () => {
	usePageTopBar({ titulo: Constants.PAGES.habilidades });
	return (
		<PageContainer>
			<UnderConstruction descricao="tudo" />
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
