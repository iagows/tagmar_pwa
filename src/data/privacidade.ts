import type { Privacidade } from "../models/PrivacidadeDTO";

export const PoliticaDePrivacidade: Privacidade = {
	termos: [
		{
			vigor: "21 de abril de 2024",
			linhas: [
				"Nosso aplicativo não coleta dados pessoais do usuário.",
				"Não armazenamos nenhuma informação nem compartilhamos dados com terceiros.",
				"Não coletamos dados, mas armazenamos as fichas do jogo localmente no seu dispositivo e não é acessível por nós.",
				"Se você fizer login usando sua conta do Google, quem fará o armazenamento de dados será o Google na SUA conta.",
				"Não usamos nenhum framework de coleta de dados nem pedimos que o usuário crie uma conta para nosso aplicativo. Se você tiver uma conta Google e quiser utilizá-la, é opção sua.",
				"Fazemos uma grande esforço em proteger a privacidade de nossos usuários e para garantir que seus dados estão seguros.",
				"Se você tiver perguntas ou preocupações sobre nossa política de privacidade, por favor, entre em contato.",
				"Lembrando: todo o armazenamento fica nos SEUS aparelhos.",
			],
		},
		{
			vigor: "13 de fevereiro de 2024",
			linhas: [
				"Nosso aplicativo não coleta dados pessoais do usuário.",
				"Não armazenamos nenhuma informação nem compartilhamos dados com terceiros.",
				"O único dado coletado fica armazenado localmente no seu dispositivo e não é acessível por nós.",
				"Não usamos nenhum framework de coleta de dados nem pedimos que o usuário crie uma conta para nosso aplicativo.",
				"Fazemos uma grande esforço em proteger a privacidade de nossos usuários e para garantir que seus dados estão seguros.",
				"Se você tiver perguntas ou preocupações sobre nossa política de privacidade, por favor, entre em contato.",
				"Lembrando: todo o armazenamento fica no SEU aparelho.",
			],
		},
	],
};
