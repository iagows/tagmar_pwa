import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { OAuth } from "../../../models/OAuthDTO";

const INITIAL: OAuth = {
	accessToken: "",
	isLoggedIn: false,
	tokenExpiryDate: 0,
};

const slice = createSlice({
	name: "oauth2",
	initialState: INITIAL,
	reducers: {
		setLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.isLoggedIn = action.payload;
		},
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
		},
		setTokenExpiryDate: (state, action: PayloadAction<number>) => {
			state.tokenExpiryDate = action.payload;
		},
	},
});

export default slice.reducer;
export const { setAccessToken, setLoggedIn, setTokenExpiryDate } =
	slice.actions;
