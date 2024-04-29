import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	type PersistConfig,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from "redux-persist";
import createTransform from "redux-persist/es/createTransform";
import configReducer from "./slices/config";
import fichasReducer from "./slices/fichas";
import filterReducer from "./slices/filters";
import tokenReducer from "./slices/token";
import usuarioReducer from "./slices/user";

const tagmarReducers = combineReducers({
	config: configReducer,
	fichas: fichasReducer,
	usuario: usuarioReducer,
	token: tokenReducer,
	filter: filterReducer,
});

/*
 * Correção temporária para erro na transição de alguns dados
 */
const fixEntityId = (
	record: Record<string, unknown>,
	key: string | number | symbol,
) => {
	switch (key) {
		case "fichas":
		case "usuario": {
			const ids = record.ids;
			const entities = record.entities;
			if (!ids || !entities) {
				return {
					ids: [],
					entities: [],
				};
			}
		}
	}

	return { ...record };
};

type PersistRootState = ReturnType<typeof tagmarReducers>;
const persistConfig: PersistConfig<PersistRootState> = {
	key: "root",
	storage: AsyncStorage,
	transforms: [createTransform(fixEntityId, fixEntityId)],
};

const persistedReducer = persistReducer(persistConfig, tagmarReducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
