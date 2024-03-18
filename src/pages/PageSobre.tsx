import { Link } from "@mui/material";
import PageContainer from "../components/PageContainer";
import TagLabel from "../components/TagmarUI/Label";
import { SectionPage } from "../components/TagmarUI/Section";
import { ABOUT_DATA } from "../data/about";

const PageSobre = () => {
	return (
		<PageContainer>
			<TagLabel sx={{ marginBottom: 1 }}>
				Os links levarão para fora do aplicativo. Clique/toque com cautela.
			</TagLabel>
			{ABOUT_DATA.map((item) => (
				<SectionPage.Section key={item.id} title={item.title}>
					{item.info.map((info, index) => (
						<TagLabel key={`${info.text}_${index}`}>
							{info.url ? (
								<Link href={info.url} target="_blank">
									{info.text}
								</Link>
							) : (
								info.text
							)}
						</TagLabel>
					))}
				</SectionPage.Section>
			))}
		</PageContainer>
	);
};

export default PageSobre;
