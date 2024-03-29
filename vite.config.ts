import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: "tagmar_pwa",
	define: {
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
	},
	plugins: [
		react(),
		svgr({
			include: "**/*.svg?react",
		}),
		VitePWA({
			workbox: {
				globPatterns: ["**/*"],
			},
			includeAssets: ["**/*"],
			manifest: {
				theme_color: "#70B0E0",
				background_color: "#FFAC3D",
				display: "standalone",
				scope: "/tagmar_pwa",
				start_url: "/tagmar_pwa",
				name: "Tagmar",
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
