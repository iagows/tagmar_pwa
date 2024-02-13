import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	base: "tagmar_pwa",
	plugins: [
		react(),
		VitePWA({
			workbox: {
				globPatterns: ["**/*"],
			},
			includeAssets: ["**/*"],
			manifest: {
				theme_color: "#70B0E0",
				background_color: "#FFAC3D",
				display: "standalone",
				scope: "/",
				start_url: "/",
				name: "Tagmar PWA",
				short_name: "Tagmar",
				description: "Aplicativo para narradores e jogadores de Tagmar",
				icons: [
					{
						src: "pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "maskable-icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
		}),
	],
});
