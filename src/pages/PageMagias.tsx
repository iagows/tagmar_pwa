import Clear from "@mui/icons-material/Clear";
import Filter from "@mui/icons-material/FilterAlt";
import Search from "@mui/icons-material/SearchOutlined";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import ListaDeLetras from "../components/ListaDeLetras";
import ListaDeNomes from "../components/ListaDeNomes";
import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import { MAGIAS } from "../data/magiasCompiladas";
import useListFilter from "../hooks/useListFilter";
import { RoutePath } from "../routing/RouteNames";

const PageMagias = () => {
	const [text, setText] = useState<string>("");
	const [selectedCharButton, setSelectedCharButton] = useState<string>("");

	const { filtered } = useListFilter({
		input: text,
		list: MAGIAS,
		selectedChar: selectedCharButton,
	});

	function clear() {
		setText("");
		setSelectedCharButton("");
	}

	function onCharClick(char: string): void {
		setSelectedCharButton((last) => (char === last ? "" : char));
	}

	const hasText = text.length > 0 || selectedCharButton.length > 0;
	return (
		<PageContainer>
			<UnderConstruction descricao="Filtros e revisar magias" />
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<TextField
					label="Nome da magia"
					variant="outlined"
					value={text}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setText(event.target.value);
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								{hasText && (
									<IconButton onClick={clear}>
										<Clear />
									</IconButton>
								)}
								<IconButton disabled>
									<Filter />
								</IconButton>
							</InputAdornment>
						),
						startAdornment: (
							<IconButton disabled>
								<Search />
							</IconButton>
						),
					}}
					placeholder="Nome da magia"
				/>
				<ListaDeLetras
					lista={filtered}
					onClick={onCharClick}
					selected={selectedCharButton}
				/>
				<ListaDeNomes lista={filtered} to={RoutePath.MAGIA} />
			</Box>
		</PageContainer>
	);
};

export default PageMagias;
