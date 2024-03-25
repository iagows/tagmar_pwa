import { createAsyncThunk } from "@reduxjs/toolkit";
import { Config } from "../../models/ConfigDTO";
import { AsyncDuckDB, getDuckDB } from "duckdb-wasm-kit";

// const CONFIG_FILE: string = "tagmar.parquet";

export async function test(): Promise<void> {
	const db: AsyncDuckDB = await getDuckDB();
	const conn = await db.connect(); // Connect to db

	// Basic query
	console.log("Basic query");
	const q = await conn.query(
		"SELECT count(*)::INTEGER as v FROM generate_series(0, 100) t(v)",
	); // Returns v = 101
	console.log("Query result (Arrow Table):", q);

	// Copy of query result (JSON instead of Arrow Table)
	console.log(
		"Query result copy (JSON):",
		JSON.parse(JSON.stringify(q.toArray())),
	);
	console.log("");

	// Prepare query
	console.log("Prepared query statement");
	const stmt = await conn.prepare(
		"SELECT (v + ?) as v FROM generate_series(0, 1000) as t(v);",
	);

	// ... and run the query with materialized results
	const res = await stmt.query(234); // Returns 1001 entries ranging from v = 234 to 1,234
	console.log("Statement result (Table):", res);
	console.log(
		"Statement result copy (JSON):",
		// Bug fix explained at: https://github.com/GoogleChromeLabs/jsbi/issues/30
		JSON.parse(
			JSON.stringify(
				res.toArray(),
				(_, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
			),
		),
	);

	// Closing everything
	await conn.close();
	await db.terminate();

	console.log("Finished!");
}

export namespace TagThunk {
	export const setBuscaInexata = createAsyncThunk(
		"config/swapBusca",
		async (isInexata: boolean): Promise<boolean> => {
			// salva
			// test();
			return isInexata;
		},
	);

	export const setDado3D = createAsyncThunk(
		"config/swapDado",
		async (isDado: boolean): Promise<boolean> => {
			// salva
			return isDado;
		},
	);

	export const loadConfig = createAsyncThunk(
		"config/load",
		async (): Promise<Config> => {
			// get from file
			const c: Config = {
				isBuscaInexata: false,
				isDado3dAtivo: false,
			};
			return c;
		},
	);
}
