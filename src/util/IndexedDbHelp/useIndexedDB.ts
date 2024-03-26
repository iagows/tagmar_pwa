import { useEffect, useState } from "react";

export enum IndexedStores {
	CONFIG = "config",
}

type Out = {
	isDbOpen: boolean;
};

const TAGMAR_DB = "tagmar_db";

const initDB = (databaseName: string): Promise<IDBDatabase | null> => {
	return new Promise((resolve) => {
		const request = indexedDB.open(databaseName);

		request.onupgradeneeded = () => {
			const db = request.result;

			if (!db.objectStoreNames.contains(IndexedStores.CONFIG)) {
				db.createObjectStore(IndexedStores.CONFIG, { keyPath: "id" });
			}
		};

		request.onsuccess = () => {
			const db = request.result;
			console.log("request.onsuccess - initDB", db.version);
			resolve(db);
		};

		request.onerror = () => {
			resolve(null);
		};
	});
};

const useIndexedDB = (): Out => {
	const [localDb, setLocalDb] = useState<IDBDatabase>();

	useEffect(() => {
		if (!localDb) {
			const startDb = async () => {
				const db = await initDB(TAGMAR_DB);
				if (db) {
					setLocalDb(db);
				}
			};
			startDb();
		}
	}, [localDb]);

	return {
		isDbOpen: !!localDb,
	};
};

export default useIndexedDB;
