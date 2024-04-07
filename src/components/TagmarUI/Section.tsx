import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { PropsWithChildren } from "react";
import TagLabel from "./Label";

const Accordion = (props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
);

type ISection = {
	title: string;
};
const Section = ({ title, children }: PropsWithChildren<ISection>) => (
	<Accordion>
		<AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
			<TagLabel variant="body1" fontWeight={"bold"}>
				{title}
			</TagLabel>
		</AccordionSummary>
		<AccordionDetails>{children}</AccordionDetails>
	</Accordion>
);

export const SectionPage = {
	Section,
	Accordion,
};
