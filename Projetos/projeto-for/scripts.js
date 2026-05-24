

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

    for(const contact of contacts){
        if (input.toLowerCase() === contact.name.toLowerCase()){
            p.innerHTML = `Contato Encontrado <br> Nome: ${contact.name}<br> Número: ${contact.number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado, tente novamente"
        }
    }
}


button.addEventListener("click", findContact)