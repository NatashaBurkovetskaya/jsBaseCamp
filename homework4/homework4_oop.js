//Implement the following:
//1.Define a Shape constructor. Objects created with Shape should have a `type` property and a `getType` method.
//2.Define a Triangle constructor. Objects created with Triangle should inherit from Shape and have three own
//properties: a, b and c representing the sides of a triangle.
//3.Add a new method to the prototype called `getPerimeter`.
//Test your implementation with this code:

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

Triangle.prototype = new Shape();

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



