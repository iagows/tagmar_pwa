import { DuckDBConfig } from "@duckdb/duckdb-wasm";
import { Box, Toolbar } from "@mui/material";
import { initializeDuckDb } from "duckdb-wasm-kit";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TagDrawer from "./components/TagmarUI/Drawer";
import { Constants } from "./util/constants";

const sx = {
	flexGrow: 1,
	width: { sm: `calc(100% - ${Constants.DRAWER_WIDTH}px)` },
} as const;

function App() {
	useEffect(() => {
		const config: DuckDBConfig = {
			query: {
				/**
				 * By default, int values returned by DuckDb are Int32Array(2).
				 * This setting tells DuckDB to cast ints to double instead,
				 * so they become JS numbers.
				 */
				castBigIntToDouble: true,
			},
		};
		initializeDuckDb({ config, debug: !import.meta.env.PROD });
	}, []);
	return (
		<Box sx={{ display: "flex", flexFlow: "column" }}>
			<Box sx={{ display: "flex" }}>
				<TagDrawer />
				<Box
					sx={sx}
					height={"100vh"}
					display={"flex"}
					component="main"
					flexDirection={"column"}
				>
					<Toolbar />
					<Box sx={{ flex: 1, display: "flex" }}>{<Outlet />}</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
