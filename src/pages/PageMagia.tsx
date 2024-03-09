import { AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Descricao from "../components/Magias/Descricao";
import Niveis from "../components/Magias/Niveis";
import PageContainer from "../components/PageContainer";
import TagLabel from "../components/TagmarUI/Label";
import { SectionPage } from "../components/TagmarUI/Section";
import { getMagia } from "../data/magiasCompiladas";
import usePageTopBar from "../hooks/usePageTopBar";
import { alcanceToString } from "../models/AlcanceDTO";
import { duracaoToString } from "../models/DuracaoDTO";
import { evocacaoToString } from "../models/EvocacaoDTO";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { Constants } from "../util/constants";
import UnderConstruction from "../components/UnderConstruction";

type In<T> = {
	title: string;
	valor?: T;
	converter: (v: T) => string;
};
const Info = <T,>({ title, valor, converter }: In<T>) => {
	return valor ? (
		<Box display={"flex"}>
			<TagLabel fontWeight="bold">{title}:&nbsp;</TagLabel>
			{valor && <TagLabel>{converter(valor)}</TagLabel>}
		</Box>
	) : null;
};

const PageMagia = () => {
	const { id } = useParams();
	const magia = getMagia((id as MagiaEnum) ?? MagiaEnum.abrigo) as Magia;

	usePageTopBar({
		titulo: magia.nome,
		showBackButton: true,
	});
	return (
		<PageContainer>
			<UnderConstruction descricao="Revisar todas magias: descrição, custo, alcance etc. Revisar níveis (alguns possuem alcance, custo etc próprios" />
			<Box borderRadius={Constants.CSS.caixaGrande.radius} overflow="hidden">
				<SectionPage.Accordion expanded={true} title="aaaa">
					<AccordionSummary id="panel-header">
						<TagLabel variant="h6" color="primary">
							{magia.nome}
						</TagLabel>
					</AccordionSummary>
					<AccordionDetails>
						<Info
							title="Evocação"
							valor={magia.evocacao}
							converter={evocacaoToString}
						/>
						<Info
							title="Alcance"
							valor={magia.alcance}
							converter={alcanceToString}
						/>
						<Info
							title="Duração"
							valor={magia.duracao}
							converter={duracaoToString}
						/>
					</AccordionDetails>
				</SectionPage.Accordion>
				<SectionPage.Section title="Descrição">
					<Descricao item={magia} />
				</SectionPage.Section>
				<SectionPage.Section title="Níveis">
					<Niveis magia={magia} />
				</SectionPage.Section>
			</Box>
		</PageContainer>
	);
};

export default PageMagia;
