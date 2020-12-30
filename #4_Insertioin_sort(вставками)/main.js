/* 
один из простейших алгоритмов сортировки.
Суть его заключается в том, что в цикле один за другим 
выбираются элементы массива и сравниваются с элементами, 
стоящими перед ними, до тех пор пока не будет найдет элемент, 
меньший текущего, или мы не дойдем до начала массива. Перед 
ним мы и вставляем текущий, для этого предварительно сдвинув 
все элементы, которые оказались больше текущего, в сторону 
увеличения на один индекс.

Этот алгоритм, в отличии от другого простейшего 
алгоритма — сортировки пузырьком, имеет сложность O(n²) только 
для худшего случая (массива, отсортированного в обратном порядке), 
а для лучшего случая сложность будет O(n) — достаточно одного 
прохода, чтобы понять что массив отсортирован. При этом и затраты 
памяти всего O(n) на сам массив и O(1) на дополнительную переменную 
с текущим элементом.
*/

const insertionSort = arr => {
	
	for (let i = 1, l = arr.length; i < l; i++) {
		const current = arr[i];
		let j = i;
		
		while (j > 0 && arr[j - 1] > current) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = current;
	}
	return arr;
};




const arr = [14, 8, 18, 5, 3, 7, 9, 1, 15];

const res = insertionSort(arr);
console.log(res);