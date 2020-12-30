/* 
Сортировка слиянием имеет сложность O(n log n), 
но при этом он задействует O(n) дополнительной памяти.

Для начала создадим функцию, которая будет отвечать за вторую 
часть алгоритма — слияние двух отдельных уже отсортированных 
массивов в порядке возрастания их элементов:
*/

const merge = (arrFirst, arrSecond) => {
	const arrSort = [];
	let i = 0,
			j = 0;
	// сравниваем два массива, поочередно сдвигая указатели
	while (i < arrFirst.length && j < arrSecond.length) {
		arrSort.push(
			(arrFirst[i] < arrSecond[j]) ? arrFirst[i++] : arrSecond[j++]
		);
	}
	// обрабатываем последний элемент при разной длине массивов
	// и возвращаем один отсортированный массив
	return [
		...arrSort,
		...arrFirst.slice(i),
		...arrSecond.slice(j)
	];
};

/* 
А теперь в основной функции mergeSort реализуем разделение массива, 
рекурсивный вызов функции сортировки и слияние опять в один массив 
с помощью уже созданной функции merge:
*/

const mergeSort = arr => {
	// Проверяем корректность переданных данных
	if (!arr || !arr.length) {
		return null;
	}
	//Если массив содержит один элемент просто возвращаем его
	if (arr.length <= 1) {
		return arr;
	}
	// Находим середину массива и делим его на два
	const middle = Math.floor(arr.length / 2);
	const arrLeft = arr.slice(0, middle);
	const arrRight = arr.slice(middle);
	// Для новых массивов снова вызываем сортировку,
	// сливаем их и возвращаем снова единый массив
	return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};

const arr = [8, 5, 4, 9, 1, 2, 7, 6, 0, 3, 11];

const res = mergeSort(arr);

console.log(res);