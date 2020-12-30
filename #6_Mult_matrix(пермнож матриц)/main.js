/* 

*/

function multiplyMatrix(A, B) {

	var rowsA = A.length,     // кол-во рядков в матрице А
			colsA = A[0].length,  // кол-во столбцов в матрице А
			rowsB = B.length,     // кол-во рядков в матрице В
			colsB = B[0].length,  // кол-во столбцов в матрице В
			C = [];               // результат
	// две матрицы можно перемножить если у одной кол-во рядков равно кол-ву столбцов второй
	if (colsA != rowsB) return false;
	// подготовка результирующего массива
	for (var i = 0; i < rowsA; i++) {
		C[i] = [];
	}

	for (var k = 0; k < colsB; k++) {
		
		for (var i = 0; i < rowsA; i++) {
			
			var t = 0; // сумма результатов умножения
				
			for (var j = 0; j < rowsB; j++) {
				t += A[i][j] * B[j][k];
			}
			C[i][k] = t;
			}
		}
	return C;
}

const first = [
	[1, 2, 3, 5],
	[5, 2, 4, 3],
	[4, 2, 1, 5]
];

const second = [
	[2, 6, 3],
	[3, 3, 2],
	[1, 2, 1],
	[4, 2, 2]
];

const res = multiplyMatrix(first, second);
console.log(res);

