
//1.???????? ?????? ? ????? ??????????. ???????? ?????? ???? ?????? ?? 0 ?? 24. ???? ???????? ????? ?? 8 ?? 21, ???????? ?
//??????? ?Hello?. ? ?????? ?????? ???????? ? ??????? ?It is not good time for that?. ???? ???????? ?? ?????, ???????? ?
//??????? ?It is not a number?.
function writeNumber(a) {
    if (isNaN(a)) {
        console.log('It is not a number');
    } else if (a >= 8 && a <= 21) {
        console.log('Hello');
    } else if (a >= 0 && a < 8 || a > 21 && a <= 24) {
        console.log('It is not good time for that');
    }
}
    //writeNumber(9);


//2.???????? ???????, ??????? ????????? ?????? ? ????????? ???????? ? ???????? ??????????. ???? ????????? ???????? true,
//???????? ? ??????? ?????????? ?????, ???? false ?????????.

var arr = [2, 5, 9, 12, NaN, 1, -1, -9];
function minMaxNum(arr, bool) {
    if (arr.length != 0) {
        var number = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (bool == true && number < arr[i]) {
                number = arr[i];
            } else if (bool == false && number > arr[i]) {
                number = arr[i];
            }
        }

        console.log(number);
    } else {
        console.log("Write valid array")
    }
}
//minMaxNum(arr, true);

//3.???????? ???????, ??????? ????????? ???? ????????. ????????? ????? ?? ??? ? ??????? ? ??????? ?????? ????? ? ????????,
//  ???? ??? ????? ???????? ?? 2 ??? ???????.

function powValueByTwo(num) {
    if (typeof num === 'number' && num % 2 == 0) {
        return Math.pow(num, 2);
    }
}
//console.log(powValueByTwo(8));

//4. ???????? ??????? ? ????? ???????????. ???? ?????? ?????? ???????, ???????? ? ??????? ?? ???????.
//   ???? ?????? ?????? ???????, ?????.

function calculationTowNum(b, c) {
    if (b > c) {
        return b - c;
    } else if (c > b) {
        return b + c;
    } else if (b == c) {
        return ("You have equal numbers")
    }
}
//console.log(calculationTowNum(9, 29));


//5. ???????? ??????? ? ????? ???????????. ???? ????? ???? ????? ?? 11 ?? 19, ?? ???????? ? ??????? ?????????. ???? ???,
//   ?? ???????? ?Result is not in range between 11 and 19?.

function sumLimitValue(value1, value2) {
    var sum = value1 + value2;

    if (sum >= 11 && sum <= 19) {
        return sum;
    } else {
        return 'Result is not in range between 11 and 19';
    }
}
//console.log(sumLimitValue(7, 7));

//6. ???????? ??????? ? ????? ???????????. ???? ???? ?? ??? ??????? ??? ??????? ?? ??????. ???????? true, ???? ??? false.
function divisionWithoutRemainder(num1, num2) {
    if (num1 % num2 == 0 || num2 % num1 == 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(divisionWithoutRemainder(9, 3));

//7. ???????? ??????? ? ????? ???????????. ???????? ????????? ????? ?????, ????????? %
function equalLastNum(num1, num2) {
    var figures1 = num1.toString();
    var figures2 = num2.toString();
    var result = figures1.substring(figures1.length - 1) % figures2.substring(figures2.length - 1);

    console.log(result);
}
//equalLastNum(9088997, 9993);


//8. ???????? ?????? ????????? ?????? ???? ??????.
function displaysArr(arr) {
    var i = 0;
    var result = [];

    //for (; i < arr.length; i++) {
    //    console.log(arr[i]);
    //}

    //while (i < arr.length) {
    //    console.log(arr[i]);
    //    i++;
    //}

    //do {
    //    console.log(arr[i]);
    //    i++;
    //} while (i < arr.length);

    arr.forEach(function(item, i, arr) {
        console.log(arr[i]);
    });
}

//displaysArr([1, 33, 555, 45, 45, 12, 1, 0]);


// 9. ????????? ???????? ?? ?????? ???????????

function checkPalindrome(palindrome) {
    var changePalindrome = palindrome.split('').reverse().join('');

    if (palindrome.toUpperCase() === changePalindrome.toUpperCase()) {
        console.log('It is a palindrome');
    } else {
        console.log('It is not a palindrome');
    }
}
//checkPalindrome("Madam");

// 10. Write a program that prints the integers from 1 to 100.
//But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz".
//For numbers which are multiples of both three and five print "FizzBuzz". [1]

function printsIntegers() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
//printsIntegers();































































