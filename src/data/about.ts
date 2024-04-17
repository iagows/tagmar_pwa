export enum AboutAccordionName {
	TAGMAR = "Tagmar",
	RPG_LICENCE = "Licença do RPG Tagmar",
	APP_LICENCE = "Licença desse Site/Aplicativo",
	BUG = "Bugs e Sugestões",
	REVISAR = "Revisar",
	ABOUT = "Sobre o App",
	THANKS = "Agradecimentos",
	BIBLIOTECAS = "Bibliotecas",
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
				text: "O que está sendo revisado ou feito no momento",
				url: "https://github.com/iagows/tagmar_pwa?tab=readme-ov-file#roadmap",
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
	{
		id: AboutAccordionName.BIBLIOTECAS,
		info: [
			{
				text: "@3d-dice/dice-box-threejs",
				url: "https://github.com/3d-dice/dice-box-threejs",
			},
			{
				text: "date-fns",
				url: "https://date-fns.org/",
			},
			{
				text: "MUI",
				url: "https://mui.com/",
			},
			{
				text: "Redux toolkit",
				url: "https://redux-toolkit.js.org/",
			},
			{
				text: "zod",
				url: "https://zod.dev/",
			},
			{
				text: "redux-persist",
				url: "https://github.com/rt2zz/redux-persist",
			},
		],
	},
] as const;
