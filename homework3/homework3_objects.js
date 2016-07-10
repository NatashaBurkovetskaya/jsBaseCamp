//The practical part
//1.
var obj1 = {
    name: 'Nata',
    surName: 'Burkovetskaya',
    age: 23
};
function Obj2(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
}
var anotherObj2 = new Obj2('Natasha', 'Burkovetskaya', 20);


function compareObjects(obj1, obj2, value) {
    if (obj1.age > obj2.age) {
        console.log(obj1.name);
    } else if (obj1.age < obj2.age) {
        console.log(obj2.name);
    } else {
        console.log("Objects are equal");
    }
}
compareObjects(obj1, anotherObj2, 'age');


//2.
function Obj(name) {
    this.name = name;
    this.played = Math.round(Math.random() * (10000));
}
var firstSong = new Obj('James Vincent McMorrow - Wicked Game');
var secondSong = new Obj('Kasabian – Fire');
var thirdSong = new Obj('U2 – City of Blinding Lights');
var fourthSong = new Obj('Reamonn – Weep');
var fifthSong = new Obj('Ludovico Einaudi – Fly');

var musicSet = new Set();
musicSet.add(firstSong);
musicSet.add(secondSong);
musicSet.add(thirdSong);
musicSet.add(fourthSong);
musicSet.add(fifthSong);

function showSong(musicSet) {
    musicSet.forEach(function (value) {
        console.log(value);
    });
}

showSong(musicSet);

//3.
var Calculator = function () {
    var arr = [];

    this.add = function (num) {
        arr.push(num);
    };
    this.getCurrentSum = function (index) {
        var sum = 0;
        if (index == null) {
            index = arr.length
        }
        for (var i = 0; i < index; i++) {
            sum += arr[i];
        }
        return sum;
    };
};
var newCalculator = new Calculator();
var secondCalculator = new Calculator();

newCalculator.add(3);
newCalculator.add(8);
newCalculator.add(11);

secondCalculator.add(5);
secondCalculator.add(12);
secondCalculator.add(17);

console.log(newCalculator.getCurrentSum() + secondCalculator.getCurrentSum());
console.log(newCalculator.getCurrentSum(2) + secondCalculator.getCurrentSum(2));
console.log(secondCalculator.getCurrentSum(3), secondCalculator.getCurrentSum());







