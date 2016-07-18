//Implement the following:
//1.Define a Shape constructor. Objects created with Shape should have a `type` property and a `getType` method.
//2.Define a Triangle constructor. Objects created with Triangle should inherit from Shape and have three own
//properties: a, b and c representing the sides of a triangle.
//3.Add a new method to the prototype called `getPerimeter`.
//Test your implementation with this code:

//1.
function Shape(type) {
    this.type = type;
    this.getType = function () {
        return this.type;
    }
}
function Triangle(a, b, c) {
    Shape.call(this, 'Triangle');
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);

delete Triangle.prototype.type;

Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
};


var t = new Triangle(1, 2, 3);
console.log(t.constructor);
console.log(t instanceof Shape);
console.log(t.getPerimeter());
console.log(t.getType());



//2.
function add () {
    var total = 0;
    var args = Array.prototype.slice.call(arguments, 0);
    for (var i=0; i<args.length; i++) {
        total += arguments[i];
    }
    return total;
}

function curryFunction(orig_func) {
    var ap = Array.prototype;
    var args = arguments;

    return function() {
        function fn () {
            if (arguments.length != 0) {
                ap.push.apply(fn.args, arguments);
                return fn;
            } else {
                return orig_func.apply(this, fn.args);
            }
        }
        fn.args = ap.slice.call( args, 1 );
        return fn.apply( this, arguments );
    };
}

var f = curryFunction(add);
var a = f(3)(4)(3)(9)(0);;
var result = a();


console.log(result);

