import Clear from "@mui/icons-material/Clear";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ListaDeLetras from "../components/ListaDeLetras";
import ListaDeNomes from "../components/ListaDeNomes";
import PageContainer from "../components/PageContainer";
import { MAGIAS } from "../data/magias";
import { Magia } from "../models/magia/MagiaDTO";
import { extractFirstChar } from "../util/functions";

const PageMagias = () => {
	const [text, setText] = useState<string>("");
	const [list, setList] = useState<Magia[]>(MAGIAS);
	const [selectedCharButton, setSelectedCharButton] = useState<string>("");

	function clear() {
		setText("");
		setSelectedCharButton("");
	}

	useEffect(() => {
		const charFiltered = MAGIAS.filter(
			(m) =>
				selectedCharButton === "" ||
				extractFirstChar(m.nome) === selectedCharButton,
		);

		const clearedText = text.trim().toLowerCase();
		const filteredList = charFiltered.filter(
			(m) => m.nome.toLowerCase() === clearedText,
		);

		setList(clearedText.length === 0 ? charFiltered : filteredList);
	}, [text, selectedCharButton]);

	function onCharClick(char: string): void {
		setSelectedCharButton((last) => (char === last ? "" : char));
	}

	const hasText = text.length > 0 || selectedCharButton.length > 0;
	return (
		<PageContainer>
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
							</InputAdornment>
						),
					}}
					placeholder="Nome da magia"
				/>
				<ListaDeLetras
					lista={MAGIAS}
					onClick={onCharClick}
					selected={selectedCharButton}
				/>
				<ListaDeNomes lista={list} />
			</Box>
		</PageContainer>
	);
};

export default PageMagias;
