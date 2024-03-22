import { Avatar, Box, MenuItem } from "@mui/material";
import { useState } from "react";
import ListaDeLetras from "../components/ListaDeLetras";
import ListaDeNomes from "../components/ListaDeNomes";
import PageContainer from "../components/PageContainer";
import TextFieldWithFilter from "../components/TagLista/TextFieldWithFilter";
import UnderConstruction from "../components/UnderConstruction";
import { MAGIAS } from "../data/magiasCompiladas";
import useListFilter from "../hooks/useListFilter";
import { RoutePath } from "../routing/RouteNames";
import getAsset from "../assets/app";
import { ProfissaoEnum } from "../models/ProfissaoDTO";
import { Relations } from "../data/relations";

const PageMagias = () => {
	const [text, setText] = useState<string>("");
	const [selectedCharButton, setSelectedCharButton] = useState<string>("");

	const { filtered } = useListFilter({
		input: text,
		list: MAGIAS,
		selectedChar: selectedCharButton,
	});

	function clearText() {
		setText("");
		setSelectedCharButton("");
	}

	function clearFilters() {
		//
	}

	function onCharClick(char: string): void {
		setSelectedCharButton((last) => (char === last ? "" : char));
	}

	const profissoes = Relations.getProfissoesMagicas();

	const hasText: boolean = text.length > 0 || selectedCharButton.length > 0;
	return (
		<PageContainer>
			<UnderConstruction descricao="Filtros e revisar magias" />
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<TextFieldWithFilter
					text={text}
					onChange={setText}
					label="Nome da magia"
					onClearText={clearText}
					showClearButton={hasText}
					onClearFilters={clearFilters}
				>
					{profissoes.map((p) => {
						const Icon = getAsset(p);
						return (
							<MenuItem key={p}>
								<Avatar>
									<Icon />
								</Avatar>{" "}
								{p}
							</MenuItem>
						);
					})}
				</TextFieldWithFilter>
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
