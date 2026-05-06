const list = [
    { name: 'Luigy', vip: true },
    { name: 'Endrik', vip: false },
    { name: 'Maria', vip: true },
    { name: 'João', vip: true },
    { name: 'Felipe', vip: false },
    { name: 'Paulo', vip: true },
    { name: 'Pedro', vip: false },
]

const update = list.map((item) => {
    const newUser = {
        name: item.name,
        braceletColor: item.vip ? "Pulseira Preta" : "Pulseira Verde"
    }
    
    return newUser
})



const students = [
    { name: 'Luigy', testGrade: 7 },
    { name: 'Endrik', testGrade: 5 },
    { name: 'Maria', testGrade: 8 },
    { name: 'João', testGrade: 9 },
    { name: 'Felipe', testGrade: 3 },
    { name: 'Paulo', testGrade: 2 },
    { name: 'Pedro', testGrade: 10 },
]

const approved = students.map(item => {
    const note = {
        name: item.name,
        testGrade: item.testGrade >= 5 ? "Aluno Aprovado" : "Aluno Reprovado"
    }

    return note
})

console.log(approved)