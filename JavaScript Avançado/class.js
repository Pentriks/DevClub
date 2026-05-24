 class Person {

    constructor(name, age) {
        console.log(`My name is ${name} and I am ${age} years old`)

        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Eu sou ${this.name} e tenho ${this.age} anos`)
    }

 }

 const newPerson = new Person ("Luigy", 16)
 const newPerson1 = new Person ("Endrik", 22)
 newPerson.talk()
 newPerson1.talk()