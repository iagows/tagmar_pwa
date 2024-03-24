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
import { StringUtil } from "../util/stringHelp";

const createSet = <T,>(s: Set<T>, o: T): Set<T> => {
	if (s.has(o)) {
		s.delete(o);
	} else {
		s.add(o);
	}
	return new Set([...s]);
};

const filterByProfissao = (profs: ProfissaoEnum[], item: MagiaEnum): boolean =>
	Relations.filterMagiaPor(profs, item);

const profissoes = Relations.getProfissoesMagicas();

const PageMagias = () => {
	const [text, setText] = useState<string>("");
	const [selectedCharButton, setSelectedCharButton] = useState<string>("");
	const [selectedProf, setSelectedProf] = useState<Set<ProfissaoEnum>>(
		new Set(),
	);

	const profFilter = (i: IdDTO.IdType) =>
		filterByProfissao([...selectedProf], i.id as MagiaEnum);
	const charFilter = (i: NameDTO.NameType) =>
		StringUtil.filterByFirstChar(selectedCharButton, i.nome);
	const proxFilter = (i: NameDTO.NameType) =>
		StringUtil.filterByProximity(text, i.nome);

	const filtered = MAGIAS.filter(profFilter)
		.filter(charFilter)
		.filter(proxFilter);

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
			<UnderConstruction descricao="Revisar magias e otimizar renderização da lista" />
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
