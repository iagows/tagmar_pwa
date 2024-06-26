import { AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import TagMagic from "../components/Magias/Info";
import Niveis from "../components/Magias/Niveis";
import TagDescricao from "../components/Magias/TagDescricao";
import PageContainer from "../components/PageContainer";
import TagLabel from "../components/TagmarUI/Label";
import { SectionPage } from "../components/TagmarUI/Section";
import UnderConstruction from "../components/UnderConstruction";
import { getMagia } from "../data/magiasCompiladas";
import { type Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { Constants } from "../util/constants";

const PageMagia = () => {
	const { id } = useParams();
	const magia = getMagia((id as MagiaEnum) ?? MagiaEnum.abrigo) as Magia;

	return (
		<PageContainer>
			<UnderConstruction descricao="Revisar todas magias: descrição, custo, alcance etc. Revisar níveis (alguns possuem alcance, custo etc próprios" />
			<Box borderRadius={Constants.CSS.caixaGrande.radius} overflow="hidden">
				<SectionPage.Accordion expanded={true}>
					<AccordionSummary id="panel-header">
						<TagLabel variant="h6" color="primary">
							{magia.nome}
						</TagLabel>
					</AccordionSummary>
					<AccordionDetails>
						<TagMagic item={magia} />
					</AccordionDetails>
				</SectionPage.Accordion>
				<SectionPage.Section title="Descrição">
					<TagDescricao item={magia} />
				</SectionPage.Section>
				<SectionPage.Section title="Níveis">
					<Niveis magia={magia} />
				</SectionPage.Section>
			</Box>
		</PageContainer>
	);
};

export default PageMagia;
