import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Box } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import TagLabel from "../components/TagmarUI/Label";
import { getMagia } from "../data/magias";
import { Magia, MagiaEnum } from "../models/magia/MagiaDTO";
import { Constants } from "../util/constants";

const Accordion = (props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
);

const PageMagia = () => {
	const { id } = useParams();
	const magia = getMagia((id as MagiaEnum) ?? MagiaEnum.abrigo) as Magia;

	return (
		<PageContainer>
			<Box
				sx={{
					borderRadius: Constants.CSS.caixaGrande.radius,
					overflow: "hidden",
				}}
			>
				<Accordion expanded={true}>
					<AccordionSummary id="panel-header">
						<TagLabel>{magia.nome}</TagLabel>
					</AccordionSummary>
					<AccordionDetails>
						<TagLabel>evocação</TagLabel>
						<TagLabel>alcance</TagLabel>
						<TagLabel>duração</TagLabel>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						id="panel-descricao"
						expandIcon={<ExpandMoreIcon color="primary" />}
					>
						<TagLabel>Descrição</TagLabel>
					</AccordionSummary>
					<AccordionDetails>
						<TagLabel>{magia.descricao}</TagLabel>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						id="panel-niveis"
						expandIcon={<ExpandMoreIcon color="primary" />}
					>
						<TagLabel>Níveis</TagLabel>
					</AccordionSummary>
					<AccordionDetails>
						{magia.niveis.map((m) => (
							<Fragment key={m.id}>
								<TagLabel>{m.nivel}</TagLabel>
								<TagLabel>{m.descricao}</TagLabel>
							</Fragment>
						))}
					</AccordionDetails>
				</Accordion>
			</Box>
		</PageContainer>
	);
};

export default PageMagia;
