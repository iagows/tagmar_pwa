import { Avatar, Badge, Box, MenuItem } from "@mui/material";
import { useState } from "react";
import getAsset from "../assets/app";
import ListaDeLetras from "../components/ListaDeLetras";
import ListaDeNomes from "../components/ListaDeNomes";
import PageContainer from "../components/PageContainer";
import TextFieldWithFilter from "../components/TagmarUI/TagLista/TextFieldWithFilter";
import UnderConstruction from "../components/UnderConstruction";
import { MAGIAS } from "../data/magiasCompiladas";
import { Relations } from "../data/relations";
import { AbstractDTO as IdDTO } from "../models/Abstract/IdDTO";
import { AbstractDTO as NameDTO } from "../models/Abstract/NameDTO";
import { ProfissaoEnum } from "../models/ProfissaoDTO";
import { MagiaEnum } from "../models/magia/MagiaDTO";
import { RoutePath } from "../routing/RouteNames";
import { Constants } from "../util/constants";
import { StringUtil } from "../util/stringHelp";

const createSet = <T,>(s: Set<T>, o: T): Set<T> => {
	if (s.has(o)) {
		s.delete(o);
	} else {
		s.add(o);
	}
	return new Set([...s]);
};

const filterByFirstChar = <T extends NameDTO.NameType>(
	c: string,
	list: T[],
): T[] =>
	list.filter((i) => c === "" || StringUtil.extractFirstChar(i.nome) === c);

const filterByProximity = <T extends NameDTO.NameType>(
	text: string,
	list: T[],
): T[] => {
	const clean = text.trim().toLowerCase();

	return list.filter((i) =>
		StringUtil.compareWordWithWordsInSentence(
			clean,
			i.nome,
			Constants.MARGEM_DIFERENCA_PALAVRAS,
		),
	);
};

const filterByProfissao = <T extends IdDTO.IdType>(
	profs: ProfissaoEnum[],
	list: T[],
): T[] => {
	return list.filter((i) => {
		const id = i.id as MagiaEnum;
		return Relations.filterMagiaPor(profs, id);
	});
};

const profissoes = Relations.getProfissoesMagicas();

const PageMagias = () => {
	const [text, setText] = useState<string>("");
	const [selectedCharButton, setSelectedCharButton] = useState<string>("");
	const [selectedProf, setSelectedProf] = useState<Set<ProfissaoEnum>>(
		new Set(),
	);

	const filtered = filterByFirstChar(selectedCharButton, MAGIAS);
	const filtered2 = filterByProximity(text, filtered);
	const filtered3 = filterByProfissao([...selectedProf], filtered2);

	function clearText() {
		setText("");
		setSelectedCharButton("");
	}

	function clearFilters() {
		setSelectedProf(new Set());
	}

	function onCharClick(char: string): void {
		setSelectedCharButton((last) => (char === last ? "" : char));
	}

	const hasText: boolean = text.length > 0 || selectedCharButton.length > 0;

	return (
		<PageContainer>
			<UnderConstruction descricao="Filtros, revisar magias e otimizar renderização da lista" />
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
						const hideBadge = !selectedProf.has(p);

						const swap = () => {
							setSelectedProf((last) => createSet(last, p));
						};
						return (
							<MenuItem key={p} onClick={swap}>
								<Badge
									variant="dot"
									color="primary"
									overlap="circular"
									invisible={hideBadge}
									anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								>
									<Avatar>
										<Icon />
									</Avatar>
								</Badge>{" "}
								{p}
							</MenuItem>
						);
					})}
				</TextFieldWithFilter>
				<ListaDeLetras
					lista={filtered3}
					onClick={onCharClick}
					selected={selectedCharButton}
				/>
				<ListaDeNomes lista={filtered3} to={RoutePath.MAGIA} />
			</Box>
		</PageContainer>
	);
};

export default PageMagias;
