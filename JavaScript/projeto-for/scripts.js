

const button = document.querySelector('button')

   const contacts = [
    {name: 'Rodolfo' , number: '(19) 94343-3434'},
    {name: 'Paulo' , number: '(12) 93443-3434'},
    {name: 'Aline' , number: '(13) 94566-3434'},
    {name: 'Maria' , number: '(14) 94343-3476'},
]


function findContact(){
    let input = document.querySelector('input').value
    let p = document.querySelector('p')

    for(let i = 0; i < contacts.length; i++){
        if (input.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Contato Encontrado <br> Nome: ${contacts[i].name}<br> Número: ${contacts[i].number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado, tente novamente"
        }
    }
}


button.addEventListener("click", findContact)