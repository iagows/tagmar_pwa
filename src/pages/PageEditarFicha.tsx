import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import TabFichaBasico from "../components/TagmarUI/TabsFicha/BasicoPersonagem";
import TabFichaCombate from "../components/TagmarUI/TabsFicha/CombatePersonagem";
import TabFichaDados from "../components/TagmarUI/TabsFicha/DadosPersonagem";
import TabFichaHabilidades from "../components/TagmarUI/TabsFicha/HabilidadesPersonagem";
import TabFichaMagia from "../components/TagmarUI/TabsFicha/MagiaPersonagem";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</Box>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const PageEditarFicha = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setTabIndex(newValue);
	};

	return (
		<PageContainer>
			<Tabs
				value={tabIndex}
				variant="scrollable"
				scrollButtons="auto"
				onChange={handleChange}
				aria-label="basic tabs example"
			>
				<Tab label="Dados" {...a11yProps(0)} />
				<Tab label="Básico" {...a11yProps(1)} />
				<Tab label="Habilidades" {...a11yProps(2)} />
				<Tab label="Combate" {...a11yProps(3)} />
				<Tab label="Magia" {...a11yProps(4)} />
			</Tabs>
			<CustomTabPanel value={tabIndex} index={0}>
				<TabFichaDados />
			</CustomTabPanel>
			<CustomTabPanel value={tabIndex} index={1}>
				<TabFichaBasico />
			</CustomTabPanel>
			<CustomTabPanel value={tabIndex} index={2}>
				<TabFichaHabilidades />
			</CustomTabPanel>
			<CustomTabPanel value={tabIndex} index={3}>
				<TabFichaCombate />
			</CustomTabPanel>
			<CustomTabPanel value={tabIndex} index={4}>
				<TabFichaMagia />
			</CustomTabPanel>
		</PageContainer>
	);
};

export default PageEditarFicha;
