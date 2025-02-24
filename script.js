class Person {
    constructor(name, age) {
        this._name = name; // Use _name to avoid shadowing the getter
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set age(umra) {
        this.age = umra;
    }
}

class Student extends Person {
    study = () => {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach = () => {
        console.log(`${this.name} is teaching`);
    }
}

let obj = new Person("John", 25);
console.log(obj.name);
obj.age = 30;
let obj1 = new Student("Alice", 30); // Changed name to avoid console output conflicts.
obj1.study();
let obj2 = new Teacher("Bob", 30); // Changed name to avoid console output conflicts.
obj2.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;