import type { TokenResponse } from "@react-oauth/google";
import { setAccessToken, setLoggedIn, setTokenExpiryDate } from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

const useToken = () => {
	const dispatch = useAppDispatch();

	const token = useAppSelector((state) => state.token.accessToken);
	const isLoggedIn = useAppSelector((state) => state.token.isLoggedIn);
	const expiry = useAppSelector((state) => state.token.tokenExpiryDate);

	const saveLogin = (response: TokenResponse) => {
		dispatch(setLoggedIn(true));
		dispatch(setAccessToken(response.access_token));
		dispatch(setTokenExpiryDate(Number(response.expires_in)));
	};

	return { saveLogin, isLoggedIn, token, expiry };
};

export default useToken;
