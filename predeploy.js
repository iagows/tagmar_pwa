// @ts-check
import fs from "fs";
import packageJson from "./package.json" assert { type: "json" };

class Versao {
	/** @type {number} */
	#major = 0;
	/** @type {number} */
	#minor = 0;
	/** @type {number} */
	#patch = 0;

	incrementMajor() {
		this.#major++;
		this.#minor = 0;
		this.#patch = 0;
	}

	incrementMinor() {
		this.#minor++;
		this.#patch = 0;
	}

	incrementPatch() {
		this.#patch++;
	}

	/**
	 * Construtor
	 *
	 * @param {string} value
	 * @returns {Versao}
	 */
	static of(value) {
		const [major, minor, patch] = value.split(".");
		const v = new Versao();
		v.#major = parseInt(major);
		v.#minor = parseInt(minor);
		v.#patch = parseInt(patch);
		return v;
	}

	/**
	 *
	 * @param {Versao} reference
	 * @returns {string}
	 */
	static to(reference) {
		return `${reference.#major}.${reference.#minor}.${reference.#patch}`;
	}
}

/**
 *
 * @returns {Versao}
 */
function getVersion() {
	return Versao.of(packageJson.version);
}

/**
 * Salva a versão no package.json
 * @param {Versao} version
 */
function saveVersion(version) {
	packageJson.version = Versao.to(version);
	fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, "\t"));
}

/**
 *
 * @param {(v:Versao)=>void} something
 */
function doSomething(something) {
	const v = getVersion();
	something(v);
	saveVersion(v);
	console.log("Versão incrementada");
}

const minor = () => {
	doSomething((v) => {
		v.incrementMinor();
	});
};

const major = () => {
	doSomething((v) => {
		v.incrementMajor();
	});
};

const patch = () => {
	doSomething((v) => {
		v.incrementPatch();
	});
};

/**
 * @type {string}
 */
const arg = process.argv[2];
switch (arg) {
	case "p":
		patch();
		break;
	case "m":
		minor();
		break;
	case "M":
		major();
		break;
	default:
		console.log("M, ou m, ou p");
		break;
}
