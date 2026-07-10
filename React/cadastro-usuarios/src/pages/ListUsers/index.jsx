import api from '../../services/api'
import { useEffect } from 'react'
import Button from '../../components/Button'
import MainBackground from '../../components/TopBackground'

function ListUsers(){

    useEffect(() => { 
        
        async function getUsers(){
            const usersFromApi = await api.get('/usuarios')
            console.log(usersFromApi)
        }

        getUsers()
       
    }, [])

    return(

        <div>
            <h1>Listagem de Usuários</h1>
            <MainBackground></MainBackground>
            <Button>Voltar</Button>
        </div>

    )
}

export default ListUsers