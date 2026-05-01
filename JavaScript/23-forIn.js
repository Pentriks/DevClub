const users = { name: "Pentriks", age: "22", street: "Rua Boa Viagem" }

for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}