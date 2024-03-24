import { remove } from "diacritics";
import { AbstractDTO } from "../models/Abstract/DescriptionOptionalDTO";
import { Constants } from "./constants";

export namespace StringUtil {
	export const getPlural = (n: number): "s" | "" => {
		return n > 1 ? "s" : "";
	};

	export const getDescricaoLonga = (
		dto: AbstractDTO.DescriptionOptionalType,
	): string[] => dto.descricao?.split("\n\n") ?? [];

	export const extractFirstChar = (word: string): string => {
		return remove(word.trim().charAt(0).toLowerCase());
	};

	/**
	 * Compara strings dando a margem de diferença entre elas
	 *
	 * @link https://www.geeksforgeeks.org/jaro-and-jaro-winkler-similarity/
	 * @param a Primeira palavra
	 * @param b Segunda palavra
	 * @returns diferença
	 */
	const jaroDistance = (s1: string, s2: string): number => {
		// sendo iguais, retorna logo
		if (s1.localeCompare(s2) === 0) {
			return 1;
		}

		// comprimentos
		const len1 = s1.length;
		const len2 = s2.length;

		// distância máxima
		const maxDistance = Math.floor(Math.max(len1, len2) / 2) - 1;

		// acertos
		let match = 0;

		// hash para acertos
		const hashS1: number[] = Array(len1).fill(0);
		const hashS2: number[] = Array(len2).fill(0);

		// iterando a primeira palavra
		for (let i = 0; i < len1; i++) {
			// procurando acertos
			for (
				let j = Math.max(0, i - maxDistance);
				j < Math.min(len2, i + maxDistance + 1);
				j++
			) {
				// se tiver acerto
				if (s1[i] === s2[j] && hashS2[j] === 0) {
					hashS1[i] = 1;
					hashS2[j] = 1;
					match++;
					break;
				}
			}
		}

		// não acertou até agora
		if (match === 0) {
			return 0;
		}

		let t = 0;
		let point = 0;

		// conta ocorrências onde dois caracteres coincidem, mas tem um outro caractere
		// entre os índices

		for (let i = 0; i < len1; i++) {
			if (hashS1[i] === 1) {
				// ache o próximo acerto na segunda palavra
				while (hashS2[point] === 0) {
					point++;
				}

				if (s1[i] !== s2[point++]) {
					t++;
				}
			}
		}
		t /= 2;

		return (match / len1 + match / len2 + (match - t) / match) / 3.0;
	};

	/**
	 * Calcula a margem de diferença entre duas palavras.
	 * @param a primeira palavra
	 * @param b segunda palavra
	 * @returns A similaridade entra ambas
	 */
	const jaroWinkler = (a: string, b: string): number => {
		let calculatedJaroDistance = jaroDistance(a, b);

		// Se está acima de um limiar
		if (calculatedJaroDistance > 0.7) {
			// comprimento do prefixo
			let prefix = 0;
			for (let i = 0; i < Math.min(a.length, b.length); i++) {
				// se são iguais
				if (a[i] === b[i]) {
					prefix++;
				} else {
					break;
				}
			}

			// o valor máximo do prefixo é 4
			prefix = Math.min(4, prefix);

			// similaridade
			calculatedJaroDistance += 0.1 * prefix * (1 - calculatedJaroDistance);
		}
		return calculatedJaroDistance;
	};

	/**
	 * Compara duas palavras [a] e [b] dando um valor mínimo de [similarity] (0 a 1)
	 *
	 * @param a Primeira palavra
	 * @param b Segunda palavra
	 * @param similarity Proximidade
	 * @returns Se ambas são parecidas ou iguais
	 */
	const compareWords = (a: string, b: string, similarity: number): boolean => {
		const A = remove(a).toLowerCase();
		const B = remove(b).toLowerCase();

		return B.indexOf(A) > -1 || jaroWinkler(A, B) >= similarity;
	};

	/**
	 * Compara [a] com as palavras contidas na [sentence] dada uma [similarity] (0 a 1)
	 *
	 * @param a Palavra a ser localizada
	 * @param sentence A frase
	 * @param similarity proximidade
	 * @returns Se uma palavra similar está contida
	 */
	export const compareWordWithWordsInSentence = (
		a: string,
		sentence: string,
		similarity: number,
	): boolean => {
		if (a.length < 3) {
			return false;
		}

		return sentence.split(" ").some((element) => {
			if (element.length < 3) {
				return false;
			}
			return compareWords(a, element, similarity);
		});
	};

	export const filterByFirstChar = (c: string, item: string): boolean =>
		c === "" || extractFirstChar(item) === c;

	export const filterByProximity = (text: string, item: string): boolean => {
		const trimmed = text.trim().toLowerCase();
		if (trimmed.length < 3) {
			return true;
		}
		return compareWordWithWordsInSentence(
			trimmed,
			item,
			Constants.MARGEM_DIFERENCA_PALAVRAS,
		);
	};

	export const filterByExact = (needle: string, hay: string): boolean => {
		const trimmedNeedle = needle.trim().toLocaleLowerCase();
		const trimmedHay = hay.trim().toLocaleLowerCase();

		if (trimmedNeedle.length < 3) {
			return true;
		}
		return trimmedHay.includes(trimmedNeedle);
	};
}
