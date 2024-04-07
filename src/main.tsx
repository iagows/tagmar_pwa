import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import "./reset.css";
import { route } from "./routing/AppRoute.tsx";
import { persistor, store } from "./stores/store.ts";
import { ThemedApp } from "./theme/index.tsx";
import { PersistGate } from "redux-persist/integration/react";

// add this to prompt for a refresh
const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm("Novo conteúdo disponível. Recarregar?")) {
			updateSW(true);
		}
	},
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemedApp>
					<RouterProvider router={route} />
				</ThemedApp>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
