import { Box } from "@mui/material";
import PageContainer from "../components/PageContainer";
import TagLabel from "../components/TagmarUI/Label";
import { PoliticaDePrivacidade } from "../data/privacidade";

const PagePrivacidade = () => {
	return (
		<PageContainer>
			{PoliticaDePrivacidade.termos.map((termo, index) => (
				<Box
					key={termo.vigor}
					sx={{ opacity: index === 0 ? 0.7 : 0.2, paddingBottom: 3 }}
				>
					<TagLabel variant="h5" paddingBottom={1}>
						{index === 0 ? "Em vigor desde" : "Sem validade, mas criada em"}{" "}
						{termo.vigor}
					</TagLabel>
					{termo.linhas.map((linha) => (
						<TagLabel key={linha}>{linha}</TagLabel>
					))}
				</Box>
			))}
		</PageContainer>
	);
};

export default PagePrivacidade;
