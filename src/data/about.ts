export enum AboutAccordionName {
	TAGMAR = "Tagmar",
	RPG_LICENCE = "Licença do RPG Tagmar",
	APP_LICENCE = "Licença desse Site/Aplicativo",
	BUG = "Bugs e Sugestões",
	REVISAR = "Revisar",
	ABOUT = "Sobre o App",
	THANKS = "Agradecimentos",
}

type AccordionData = {
	id: AboutAccordionName;
	info: { text: string; url?: string }[];
};

export const ABOUT_DATA: AccordionData[] = [
	{
		id: AboutAccordionName.TAGMAR,
		info: [
			{
				text: "Site oficial",
				url: "https://tagmar.com.br",
			},
		],
	},
	{
		id: AboutAccordionName.RPG_LICENCE,
		info: [
			{
				text: "Atribuição-NãoComercial-CompartilhaIgual 3.0 Brasil",
				url: "https://www.tagmar.com.br/LicenciamentoUsado.aspx",
			},
		],
	},
	{
		id: AboutAccordionName.APP_LICENCE,
		info: [
			{
				text: "GNU General Public License v3.0",
				url: "https://github.com/iagows/tagmar_pwa/blob/main/LICENSE",
			},
		],
	},
	{
		id: AboutAccordionName.BUG,
		info: [
			{
				text: "Encontrou um erro ou tem uma sugestão?",
				url: "https://github.com/iagows/tagmar_pwa/issues",
			},
		],
	},
	{
		id: AboutAccordionName.REVISAR,
		info: [
			{
				text: "Revisar magias (descrição e exibição). Adicionar: trilhas, confrarias, ordens e colégios",
				url: "https://www.tagmar.com.br/wiki/Default.aspx?PageName=Livro%20de%20Magias",
			},
		],
	},
	{
		id: AboutAccordionName.ABOUT,
		info: [
			{
				text: "Código-fonte",
				url: "https://github.com/iagows/tagmar_pwa/",
			},
		],
	},
	{
		id: AboutAccordionName.THANKS,
		info: [
			{
				text: "Edilton Oliveira",
			},
			{
				text: "Marcelo Rodrigues",
				url: "https://www.tagmar.com.br/",
			},
			{
				text: "Odijas",
				url: "https://www.instagram.com/odjaseviu?igsh=bXpvOXdjdWEwdGQ3",
			},
		],
	},
] as const;
