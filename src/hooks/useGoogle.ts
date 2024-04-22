import {
	type TokenResponse,
	googleLogout,
	useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import useUsuario from "../stores/slices/user/useUsuario";

const mountLink = (token: string): string => {
	return `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`;
};

const mountConfig = (token: string) => ({
	headers: {
		Authorization: `Bearer ${token}`,
		Accept: "application/json",
	},
});

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

const request = async (token: string, onFinish: (a: OAuthUser) => void) => {
	try {
		const res: Response = await axios.get(mountLink(token), mountConfig(token));
		onFinish(res.data);
	} catch (error) {
		console.warn(error);
	}
};

const useGoogle = () => {
	const [token, setToken] = useState<TokenResponse>();
	const [profile, setProfile] = useState<OAuthUser>();
	const { criaAtualiza, apaga } = useUsuario();

	const login = useGoogleLogin({
		onSuccess: setToken,
		onError: (error) => console.log("Login Failed:", error),
	});

	useEffect(() => {
		if (token) {
			request(token.access_token, setProfile);
		}
	}, [token]);

	useEffect(() => {
		if (profile) {
			criaAtualiza({
				id: profile.id,
				nome: profile.name,
				email: profile.email,
				image: profile.picture,
			});
		} else {
			//
		}
	}, [profile, criaAtualiza]);

	const logout = () => {
		googleLogout();
		setProfile(undefined);
	};

	return {
		login,
		logout,
		profile,
	};
};

export default useGoogle;
