export type AboutAccordionName =
	| "tagmar"
	| "tagmar licence"
	| "app license"
	| "bug"
	| "forum"
	| "app"
	| "testers";

type AccordionData = {
	id: AboutAccordionName;
	title: string;
	info: { text: string; url?: string }[];
};

export const ABOUT_DATA: AccordionData[] = [
	{
		id: "tagmar",
		title: "Tagmar",
		info: [
			{
				text: "Site oficial",
				url: "https://tagmar.com.br",
			},
		],
	},
	{
		id: "tagmar licence",
		title: "Licença do RPG Tagmar",
		info: [
			{
				text: "Atribuição-NãoComercial-CompartilhaIgual 3.0 Brasil",
				url: "https://www.tagmar.com.br/LicenciamentoUsado.aspx",
			},
		],
	},
	{
		id: "app license",
		title: "Licença desse Site/Aplicativo",
		info: [
			{
				text: "GNU General Public License v3.0",
				url: "https://github.com/iagows/tagmar_pwa/blob/main/LICENSE",
			},
		],
	},
	{
		id: "bug",
		title: "Bugs e sugestões",
		info: [
			{
				text: "Encontrou um erro ou tem uma sugestão?",
				url: "https://github.com/iagows/tagmar_pwa/issues",
			},
		],
	},
	{
		id: "forum",
		title: "Fórum oficial",
		info: [
			{
				text: "Conheça o fórum oficial",
				url: "https://www.tagmar.com.br/forum/default.aspx?g=active",
			},
		],
	},
	{
		id: "app",
		title: "Sobre o App",
		info: [
			{
				text: "Código-fonte",
				url: "https://github.com/iagows/tagmar_pwa/",
			},
		],
	},
	{
		id: "testers",
		title: "Testadores",
		info: [
			{
				text: "Álvaro",
			},
			{
				text: "Breno",
			},
			{
				text: "Edilton",
			},
			{
				text: "Marcelo",
			},
			{
				text: "Petrus",
			},
			{
				text: "Rodolfo",
			},
			{
				text: "Sérgio",
			},
		],
	},
];
