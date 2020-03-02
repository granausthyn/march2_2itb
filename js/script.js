class Person{
    constructor(name){
        this.name=name;
    }
}

class Student{
    constructor(name, course){
        super(name);
        this.course = course;
    
    }
}

let p = new Person("Juan Dela Cruz");
let s = new Student("Pedro Penduko", "IT");

p = s;
document.write(`Hello ${p.name}<br>`);

s = p;
document.write(`Hello ${p.name}`);