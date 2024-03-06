import { AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Descricao from "../components/Magias/Descricao";
import Niveis from "../components/Magias/Niveis";
import { MagiaPage } from "../components/Magias/Section";
import PageContainer from "../components/PageContainer";
import TagLabel from "../components/TagmarUI/Label";
import UnderConstruction from "../components/UnderConstruction";
import { getMagia } from "../data/magias";
import usePageTopBar from "../hooks/usePageTopBar";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { Constants } from "../util/constants";

const PageMagia = () => {
	const { id } = useParams();
	const magia = getMagia((id as MagiaEnum) ?? MagiaEnum.abrigo) as Magia;

	usePageTopBar(magia.nome);
	return (
		<PageContainer>
			<UnderConstruction descricao="Botão de voltar e layout" />
			<Box borderRadius={Constants.CSS.caixaGrande.radius} overflow="hidden">
				<MagiaPage.Accordion expanded={true}>
					<AccordionSummary id="panel-header">
						<TagLabel variant="h6" color="primary">
							{magia.nome}
						</TagLabel>
					</AccordionSummary>
					<AccordionDetails>
						<TagLabel>evocação</TagLabel>
						<TagLabel>alcance</TagLabel>
						<TagLabel>duração</TagLabel>
					</AccordionDetails>
				</MagiaPage.Accordion>
				<MagiaPage.Section title="Descrição">
					<Descricao item={magia} />
				</MagiaPage.Section>
				<MagiaPage.Section title="Níveis">
					<Niveis magia={magia} />
				</MagiaPage.Section>
			</Box>
		</PageContainer>
	);
};

export default PageMagia;
