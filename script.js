function addition(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function() {
        return this.a + this.b;
    }
}


var add1 = new addition(5, 5);
console.log(add1.sum());

// Person Object
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');


// Car Object
function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
//var mycar = new Car('Eagle', 'Talon TSi', 1993);
//var kenscar = new Car('Nissan', '300ZX', 1992);
//var vpgscar = new Car('Mazda', 'Miata', 1990);
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);

console.log(car2.owner.name);