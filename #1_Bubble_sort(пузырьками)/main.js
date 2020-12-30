/* 
Сам по себе он не является эффективным, 
имеет сложность O(n²) и на практике не используется.
*/

const bubbleSort = arr => {

	for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
		// флаг, отслеживающий перестановку элементов — если за очередной 
		// проход по массиву не произошло ни одной, значит массив уже отсортирован.
		let wasSwap = false;
		
		for (let j = 0, endJ = endI - i; j < endJ; j++) {
			
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				wasSwap = true;
			}
		}
		if (!wasSwap) break;
	}
	return arr;
};

const arr = [14, 8, 18, 5, 3, 7, 9];

const res = bubbleSort(arr);
console.log(res);