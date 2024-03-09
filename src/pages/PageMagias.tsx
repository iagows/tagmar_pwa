import Clear from "@mui/icons-material/Clear";
import Filter from "@mui/icons-material/FilterAlt";
import Search from "@mui/icons-material/SearchOutlined";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ListaDeLetras from "../components/ListaDeLetras";
import ListaDeNomes from "../components/ListaDeNomes";
import PageContainer from "../components/PageContainer";
import UnderConstruction from "../components/UnderConstruction";
import { MAGIAS } from "../data/magiasCompiladas";
import usePageTopBar from "../hooks/usePageTopBar";
import { Magia } from "../models/magia/MagiaDTO";
import { Constants } from "../util/constants";
import { StringUtil } from "../util/stringHelp";
import { RoutePath } from "./RouteNames";

const PageMagias = () => {
	usePageTopBar(Constants.PAGES.magias);
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
				StringUtil.extractFirstChar(m.nome) === selectedCharButton,
		);

		const clearedText = text.trim().toLowerCase();
		const filteredList = charFiltered.filter((m) =>
			StringUtil.compareWordWithWordsInSentence(
				clearedText,
				m.nome,
				Constants.MARGEM_DIFERENCA_PALAVRAS,
			),
		);

		setList(clearedText.length === 0 ? charFiltered : filteredList);
	}, [text, selectedCharButton]);

	function onCharClick(char: string): void {
		setSelectedCharButton((last) => (char === last ? "" : char));
	}

	const hasText = text.length > 0 || selectedCharButton.length > 0;
	return (
		<PageContainer>
			<UnderConstruction descricao="Filtros e completar lista" />
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
					lista={MAGIAS}
					onClick={onCharClick}
					selected={selectedCharButton}
				/>
				<ListaDeNomes lista={list} to={RoutePath.MAGIA} />
			</Box>
		</PageContainer>
	);
};

export default PageMagias;
