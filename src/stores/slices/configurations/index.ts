import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Constants } from "../../../util/constants";

const appSlice = createSlice({
	name: "configuracoes",
	initialState: {
		appTitle: Constants.PAGES.tagmar as string,
	},
	// https://redux-toolkit.js.org/api/createslice/
	reducers: {
		changeTitle: (state, action: PayloadAction<string>) => {
			state.appTitle = action.payload;
		},
	},
});

export default appSlice.reducer;
export const { changeTitle } = appSlice.actions;
