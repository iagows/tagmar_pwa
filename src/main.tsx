import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./reset.css";
import { store } from "./stores/store.ts";
import { ThemedApp } from "./theme/index.tsx";
import { registerSW } from "virtual:pwa-register";

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
			<ThemedApp>
				<App />
			</ThemedApp>
		</Provider>
	</React.StrictMode>,
);
