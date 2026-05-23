const person = {
    nome: "Luigy",
    idade: 16
}

this.person = person

const people = {
    name: "Pentriks",
    age: 89,
    talk: function () {
        console.log(this.name)
    }
}

people.talk()