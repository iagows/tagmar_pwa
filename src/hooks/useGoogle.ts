import {
	type TokenResponse,
	googleLogout,
	useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import useToken from "../stores/slices/token/useToken";
import useUsuario from "../stores/slices/user/useUsuario";

type OAuthUser = {
	id: string;
	email: string;
	verified_email: boolean;
	name: string;
	given_name: string;
	family_name: string;
	picture: string;
};

type Response = {
	data: OAuthUser;
	status: number;
};

const request = async (token: string): Promise<OAuthUser | undefined> => {
	try {
		const res: Response = await axios.get(
			`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
				},
			},
		);
		return res.data;
	} catch (error) {
		console.warn(error);
	}
	return undefined;
};

const useGoogle = () => {
	const { saveLogin } = useToken();
	const { cria, apaga, usuario } = useUsuario();

	const login = useGoogleLogin({
		onSuccess: async (response: TokenResponse) => {
			if (response) {
				saveLogin(response);
				const user = await request(response.access_token);
				if (user) {
					cria({
						id: user.id,
						nome: user.name,
						email: user.email,
						image: user.picture,
					});
				}
			}
		},
		onError: (error) => console.log("Login Failed:", error),
	});

	const logout = () => {
		apaga();
		googleLogout();
	};

	return {
		login,
		logout,
		usuario,
	};
};

export default useGoogle;
