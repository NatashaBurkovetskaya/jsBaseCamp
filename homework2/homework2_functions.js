//Practical in the class

//1. Create a function that will take any number of arguments and return their sum.
function sum() {
    var a = 0;
    for (var i = 0; i < arguments.length; i++) {
        a += arguments[i];
    }
    return a;
}
//console.log(sum(4, 5, 7));

//2. Make this function be able to take array as argument.
function sumArr(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    });
}
//console.log(sumArr([4, 5, 7, 0, 9]));

//3.In Browser environment declare a variable:
//    var myVar = { key: 'value' };
//Look at
//window.myVar;
//1. Declare a private variable using IIFE.
//2. Is there any other ways how to declare private variables in JavaScript ?

var myVar = {key: 'value'};
(function () {
    var myAnotherVar = 5;
})();
//console.log(myVar);
//console.log(myAnotherVar);


//4. Create a function called celsiusToFahrenheit:
//    Store a celsius temperature into a variable.
//    Convert it to fahrenheit and output "NN°C is NN°F".

function celsiusToFahrenheit(t) {
    return t + 'C' + '=' + (t * 1.8 + 32) + 'F';

}
//console.log(celsiusToFahrenheit(177));

//Practical at home

//5. Create a function called fahrenheitToCelsius:
//    Now store a fahrenheit temperature into a variable.
//    Convert it to celsius and output "NN°F is NN°C."
function fahrenheitToCelsius(t) {
    return t + 'F' + '=' + ((t - 32) / 1.8 ) + 'C';

}
//console.log(fahrenheitToCelsius(351));

//6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//Example string : 'Hello, GlobalLogic!'
//Expected Output : 'GlobalLogic'
function toFindLongestWord(str) {
    var arr = str.split(' ');
    var wrd = '';
    for (var i = 0; i < arr.length; i++) {
        if (wrd.length < arr[i].length) {
            wrd = arr[i];
        }
    }
    return wrd;
}
//console.log(toFindLongestWord('Hello, GlobalLogic!'));


//7. Write a function that can print entity details based on next model:
//Expected output: "%NAME%(%TYPE%) - %AGE%."
var sameInf = {
    name: 'Natasha',
    type: 'type',
    age: 23
};

function showSameInf(obj) {
    return '%' + obj.name + '%(%' + obj.type + '%)%' + obj.age + '%';
}

//console.log(showSameInf(sameInf));


//8. Rewrite that function to use this instead of argument (use apply, call and bind to print the details of
// different entities).
var sameInf1 = {
    name: 'Natasha',
    type: 'type',
    age: 23
};

function showSameInf1(sameInf1) {
    return '%' + this.name + '%(%' + this.type + '%)%' + this.age + '%';

}
//var wrapper = showSameInf1.bind(sameInf1);
//console.log(wrapper());

//console.log(showSameInf1.call(sameInf1));
//console.log(showSameInf1.apply(sameInf1, ['name', 'type', 'age']));

//Home Task

//9. 1. ???????? ???????, ??????? ????? ?????????? ????? ?????????? ????????, ??????? ???? ???????? ? ??? ???????,
// ??? ????????. ?????????? - ?? ?????, ???????? ? ????????? ????? - 1 ??????.
function extractCharacters(str) {
    var arr = str.toLowerCase().split('');

    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        obj[value] = true;
    }
    return Object.keys(obj);
}

//console.log(extractCharacters('abcd'));
//console.log(extractCharacters('aaaabc'));
//console.log(extractCharacters('Hello, world'));



//10. 2. ???????? ???????, ??????? ????? ?????????? ????? ???????, ? ??????? ??????? ????? ????? ???????? ?
// ??????? ????????? ??????????.

function createLogger(prefix, value) {
    var d = new Date().toISOString();
    return d + ' ' + prefix + ': ' + value;
}
//console.log(createLogger('My Logger', 'some data'));


































