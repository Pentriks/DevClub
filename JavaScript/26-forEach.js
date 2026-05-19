let users = [
    {name: 'Pentriks', age: 23, contact: '(11) 97280-8111'},
    {name: 'Luigy', age: 16, contact: '(11) 97280-8110'},
    {name: 'Pentriks', age: 23, contact: '(11) 97280-8011'},
    {name: 'Pentriks', age: 23, contact: '(11) 97280-8101'},
]

users.forEach((item) => {
    console.log(`Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});