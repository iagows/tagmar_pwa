import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slices/config";
import fichaReducer from "./slices/fichas";

export const store = configureStore({
	reducer: {
		fichas: fichaReducer,
		config: configReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
