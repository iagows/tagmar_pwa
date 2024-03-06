import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Link,
} from "@mui/material";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import TagLabel from "../components/TagmarUI/Label";
import UnderConstruction from "../components/UnderConstruction";
import { ABOUT_DATA, AboutAccordionName } from "../data/about";
import usePageTopBar from "../hooks/usePageTopBar";
import { Constants } from "../util/constants";

const PageSobre = () => {
	usePageTopBar(Constants.PAGES.sobre);
	const [expanded, setExpanded] = useState<AboutAccordionName>("tagmar");

	const onChange =
		(panel: AboutAccordionName) =>
		(_: React.SyntheticEvent, isExpanded: boolean) => {
			if (isExpanded) {
				setExpanded(panel);
			}
		};

	return (
		<PageContainer>
			<UnderConstruction descricao="Revisar" />
			<TagLabel>
				Os links aqui contidos levarão para fora do aplicativo. Clique/toque com
				cautela.
			</TagLabel>
			{ABOUT_DATA.map((item) => (
				<Accordion
					expanded={expanded === item.id}
					onChange={onChange(item.id)}
					key={item.id}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
						<TagLabel>{item.title}</TagLabel>
					</AccordionSummary>
					<AccordionDetails>
						{item.info.map((info) => (
							<TagLabel>
								{info.url ? (
									<Link href={info.url} target="_blank">
										{info.text}
									</Link>
								) : (
									info.text
								)}
							</TagLabel>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</PageContainer>
	);
};

export default PageSobre;
