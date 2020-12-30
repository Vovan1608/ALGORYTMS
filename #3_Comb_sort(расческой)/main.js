/* 
Число, на которое должен раз за разом уменьшаться разрыв, 
было названо фактором уменьшения и выведено авторами сортировки из формулы:
( 1 / ( 1-e^(-φ) ) = 1.247330950103979,
где е — экспонента; φ — “золотое” число.
Нам достаточно округлить его до 1.247, и вывести первое значение нашего 
расстояния, равное длине массива, деленной на фактор уменьшения, и округленного
до ближайшего целого. Затем после каждой итерации мы будет его снова делить на фактор, 
округлять, и так пока оно не станет равным 1.
*/

const combSort = arr => {
	const l = arr.length;
	const factor = 1.247;
	let gapFactor = l / factor;
	
	while (gapFactor > 1) {
		const gap = Math.round(gapFactor);
		
		for (let i = 0, j = gap; j < l; i++, j++) {
			
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
		gapFactor = gapFactor / factor;
	}

	return arr;
};


const arr = [14, 8, 18, 5, 3, 7, 9];

const res = combSort(arr);
console.log(res);