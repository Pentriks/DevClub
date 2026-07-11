import api from '../../services/api'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import MainBackground from '../../components/TopBackground'
import Title from '../../components/Tittle'
import { Container, ContainerUser, CardUsers, TrashIcon, AvatarUser } from './styles'
import Trash from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom'

function ListUsers(){
    const navigate = useNavigate()
    const [users, setUsers] = useState([])



    useEffect(() => { 
        
        async function getUsers(){
            const { data } = await api.get('/usuarios')
            
            setUsers(data)
        }

        getUsers()
       
    }, [])

    return(

        <Container>
        
            <MainBackground></MainBackground>

               <Title>Listagem de Usuários</Title>

            <ContainerUser>

                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${user.name}`}/>
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.age}</p>
                        <p>{user.email}</p>
                    </div>
                
                        <TrashIcon src={Trash} alt='lixo-icone'></TrashIcon>
                
                    </CardUsers>
                ))}

            </ContainerUser>
            
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>

        </Container>

    )
}

export default ListUsers