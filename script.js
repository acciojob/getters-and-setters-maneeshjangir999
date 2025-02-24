//complete this code
class Person {

	constructor(name,age){
		this.name = name
		this.age = age
	}
	get name(){
		return this.name
	}
	set age(umra){
		this.age = umra
	} 
	
}

class Student extends Person {
	let study = ()=>{
		console.log(`${this.name} is studying`)
	}
	
}

class Teacher extends Person {
	let tech = ()=>{
		console.log(`${this.name} is teaching`)
	}
	
}

let obj = new Person("Maneesh",21)
 console.log(obj.name)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
