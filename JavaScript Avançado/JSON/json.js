const user = {
    nome : "Luigy",
    idade : 16,
    hobbies : ["Academia" , "Filmes" , "Séries"],
    filhos : false,
    endereco : {
        rua : "Boa Viagem",
        numero : 208
    }
}


const convertJson = JSON.stringify(user)
const convertJsonToJS = JSON.parse(convertJson)

console.log(convertJsonToJS)