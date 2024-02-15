import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import fichaReducer from "./slices/fichas";

export const store = configureStore({
	reducer: {
		one: counterReducer,
		fichas: fichaReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
