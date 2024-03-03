import { remove } from "diacritics";
export const getPlural = (n: number): "s" | "" => {
	return n > 0 ? "s" : "";
};

export const extractFirstChar = (word: string): string => {
	return remove(word.trim().charAt(0).toLowerCase());
};

/*
import 'dart:math' as math;
import 'package:diacritic/diacritic.dart' as diacritic;

// https://www.geeksforgeeks.org/jaro-and-jaro-winkler-similarity/

/// Compara strings dando margem de diferença
double jaroDistance(String s1, String s2) {
  if (s1.compareTo(s2) == 0) return 1;

  // Length of two Strings
  final int len1 = s1.length, len2 = s2.length;

  // Maximum distance upto which matching
  // is allowed
  final int maxDistance = (math.max(len1, len2) / 2).floor() - 1;

  // Count of matches
  int match = 0;

  // Hash for matches
  final List<int> hashS1 = List.filled(len1, 0);
  final List<int> hashS2 = List.filled(len2, 0);

  // Traverse through the first String
  for (int i = 0; i < len1; i++) {
    // Check if there is any matches
    for (int j = math.max(0, i - maxDistance);
        j < math.min(len2, i + maxDistance + 1);
        j++) {
      // If there is a match
      if ((s1[i] == s2[j]) && (hashS2[j] == 0)) {
        hashS1[i] = 1;
        hashS2[j] = 1;
        match++;
        break;
      }
    }
  }

  // If there is no match
  if (match == 0) {
    return 0.0;
  }

  // Number of transpositions
  double t = 0;

  int point = 0;

  // Count number of occurrences
  // where two characters match but
  // there is a third matched character
  // in between the indices
  for (int i = 0; i < len1; i++) {
    if (hashS1[i] == 1) {
      // Find the next matched character
      // in second String
      while (hashS2[point] == 0) {
        point++;
      }

      if (s1[i] != s2[point++]) {
        t++;
      }
    }
  }

  t /= 2;

  // Return the Jaro Similarity
  return ((match.toDouble()) / (len1.toDouble()) +
          (match.toDouble()) / (len2.toDouble()) +
          (match.toDouble() - t) / (match.toDouble())) /
      3.0;
}


*/

const jaroDistance = (a: string, b: string): number => {
	return 0;
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
	const A = remove(a);
	const B = remove(b);

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
