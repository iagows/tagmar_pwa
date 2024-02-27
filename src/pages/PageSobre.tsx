import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Link,
	Typography,
} from "@mui/material";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import { ABOUT_DATA, AboutAccordionName } from "../data/about";

const PageSobre = () => {
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
			<Typography>
				Os links aqui contidos levarão para fora do aplicativo. Clique/toque com
				cautela.
			</Typography>
			{ABOUT_DATA.map((item) => (
				<Accordion
					expanded={expanded === item.id}
					onChange={onChange(item.id)}
					key={item.id}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>{item.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{item.info.map((info) => (
							<Typography>
								{info.url ? (
									<Link href={info.url} target="_blank">
										{info.text}
									</Link>
								) : (
									info.text
								)}
							</Typography>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</PageContainer>
	);
};

export default PageSobre;
