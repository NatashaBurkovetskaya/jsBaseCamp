/*
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType(variable) {
	return typeof(variable);
}


/*
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
*/
function compareByType(a, b) {
	if (a === b) {
		return 1;
	} else if (a == b) {
		return 0;
	} else {
		return -1;
	}
}


/*
	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
*/
function increase(value) {
	if (typeof(value) == 'number') {
		return value + 1;
	} else {
		return -1;
	}
}

/*
	Напишите функцию, которая принимает 2 аргумента,
	массив в разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
*/
function join(array, separator) {
	var str;
	if (separator == '') {
		separator = '-';
	}
	str = array.join(separator);

	return str;
}

/*
	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue(arrA, arrB) {
	var arrC = arrA.concat(arrB);
	return arrC;
}


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
*/
function order(arr) {
	arr.sort(function (a, b) {
		return a > b
	}).reverse();
	return arr;
}


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
*/
function removeNegative(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray(str) {
	return str.split(' ');
}


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
	if (str != null && str != "") {
		var arr = str.split(',');
		return arr[0]
	}
	return '';
}

