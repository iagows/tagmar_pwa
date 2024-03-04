export namespace Resultados {
	export enum Resultado {
		SUCESSO_CRITICO = -1,
		FALHA_CRITICA = 0,
		BRANCO = 1,
		AMARELO = 2,
		LARANJA = 3,
		VERMELHO = 4,
		AZUL = 5,
		ROXO = 6,
	}

	const results = [
		[
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0,
		],
		[
			0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2,
			2, 2, 2,
		],
		[
			0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2,
			2, 2, 3,
		],
		[
			0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,
			2, 3, 3,
		],
		[
			0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3,
			3, 3, 3,
		],
		[
			0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3,
			3, 3, 3,
		],
		[
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3,
			3, 3, 3,
		],
		[
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3,
			3, 3, 3,
		],
		[
			1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
			3, 3, 3,
		],
		[
			1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
			4, 4, 4,
		],
		[
			1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4,
			4, 4, 4,
		],
		[
			1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,
			4, 4, 4,
		],
		[
			1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
			4, 4, 5,
		],
		[
			1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
			5, 5, 5,
		],
		[
			2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5,
			5, 5, 5,
		],
		[
			2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5,
			5, 5, 5,
		],
		[
			3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5, 6, 6,
		],
		[
			4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6,
			6, 6, 6,
		],
		[
			5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6,
			6, 6, 6,
		],
		[
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		],
	] as const;

	const getColumnResults = (c: number): Resultado[] => {
		const transposedResults: number[][] = [];

		const length = results[0].length;

		for (let i = 0; i < length; i++) {
			const row = [];
			for (let j = 0; j < results.length; j++) {
				row.push(results[j][i]);
			}
			transposedResults.push(row);
		}
		return transposedResults[c + 7];
	};

	export enum ResultColors {
		FALHA_CRITICA = 0x009900,
		BRANCO = 0xffffff,
		AMARELO = 0xffff00,
		LARANJA = 0xff9900,
		VERMELHO = 0xff0000,
		AZUL = 0x00a2e8,
		ROXO = 0x0000ff,
		SUCESSO_CRITICO = 0x808080,
	}

	export const getResultFromColor = (color: ResultColors): Resultado => {
		switch (color) {
			case ResultColors.FALHA_CRITICA:
				return Resultado.FALHA_CRITICA;
			case ResultColors.BRANCO:
				return Resultado.BRANCO;
			case ResultColors.AMARELO:
				return Resultado.AMARELO;
			case ResultColors.LARANJA:
				return Resultado.LARANJA;
			case ResultColors.VERMELHO:
				return Resultado.VERMELHO;
			case ResultColors.AZUL:
				return Resultado.AZUL;
			case ResultColors.ROXO:
				return Resultado.ROXO;
			case ResultColors.SUCESSO_CRITICO:
				return Resultado.SUCESSO_CRITICO;
			default:
				return Resultado.BRANCO;
		}
	};

	export const getColumnColors = (column: number): number[] => {
		return getColumnResults(column).map((result) => {
			switch (result) {
				case Resultado.FALHA_CRITICA:
					return ResultColors.FALHA_CRITICA;
				case Resultado.BRANCO:
					return ResultColors.BRANCO;
				case Resultado.AMARELO:
					return ResultColors.AMARELO;
				case Resultado.LARANJA:
					return ResultColors.LARANJA;
				case Resultado.VERMELHO:
					return ResultColors.VERMELHO;
				case Resultado.AZUL:
					return ResultColors.AZUL;
				case Resultado.ROXO:
					return ResultColors.ROXO;
				case Resultado.SUCESSO_CRITICO:
					return ResultColors.SUCESSO_CRITICO;
			}
		});
	};

	/* 
 -7 -6 -5 -4 -3 -2 -1 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
 fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc fc
 fc fc fc fc fc fc fc fc br br br br br br br br br br br br br br am am am am am am
 fc fc fc fc fc fc br br br br br br br br br br br br br br am am am am am am am la
 fc fc fc br br br br br br br br br br br br br br br am am am am am am am am la la
 fc fc br br br br br br br br br br br br br br am am am am am am am la la la la la
 fc br br br br br br br br br br br br br am am am am am am am am la la la la la la
 br br br br br br br br br br br am am am am am am am am am la la la la la la la la
 br br br br br br br br br br am am am am am am am am la la la la la la la la la la
 br br br br br br br br am am am am am am am la la la la la la la la la la la la la
 br br br br br br am am am am am am am am la la la la la la la la la la la vm vm vm 
 br br br br am am am am am am am am la la la la la la la la la la vm vm vm vm vm vm 
 br br br am am am am am am am la la la la la la la la la vm vm vm vm vm vm vm vm vm 
 br br am am am am am am la la la la la la la la vm vm vm vm vm vm vm vm vm vm vm az 
 br am am am am am la la la la la la la vm vm vm vm vm vm vm vm vm vm vm vm az az az 
 am am am am la la la la la la vm vm vm vm vm vm vm vm vm vm vm az az az az az az az 
 am am la la la la la vm vm vm vm vm vm vm vm vm vm vm az az az az az az az az az az 
 la la la la la vm vm vm vm vm vm vm vm az az az az az az az az az az az az az ro ro 
 vm vm vm vm vm vm vm vm vm az az az az az az az az az az az az az ro ro ro ro ro ro 
 az az az az az az az az az az az az az az az az az az ro ro ro ro ro ro ro ro ro ro 
 sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc sc

#92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050
#92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00
#92d050 #92d050 #92d050 #92d050 #92d050 #92d050 #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900
#92d050 #92d050 #92d050 #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900
#92d050 #92d050 #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900
#92d050 #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900
#ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900
#ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900
#ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900
#ffffff #ffffff #ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 
#ffffff #ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 
#ffffff #ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 
#ffffff #ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #00a2e8 
#ffffff #ffff00 #ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #00a2e8 #00a2e8 #00a2e8 
#ffff00 #ffff00 #ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 
#ffff00 #ffff00 #ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 
#ff9900 #ff9900 #ff9900 #ff9900 #ff9900 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #0000ff #0000ff 
#FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #FF0000 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #0000ff #0000ff #0000ff #0000ff #0000ff #0000ff 
#00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #00a2e8 #0000ff #0000ff #0000ff #0000ff #0000ff #0000ff #0000ff #0000ff #0000ff #0000ff 
#c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0 #c0c0c0
 */
}
