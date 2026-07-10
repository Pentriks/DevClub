import { Title, Container, Form, ContainerInputs, Input, InputLabel } from './styles'
import { useRef } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import MainBackground from '../../components/TopBackground'
import { useNavigate  } from 'react-router-dom'


function Home() {

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    const navigate = useNavigate()

    async function registerNewUser(){
      await api.post('/usuarios', {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputName.current.value
      })

      navigate('/lista-de-usuarios')
    }

  return (

   <Container>

        <MainBackground>
        </MainBackground>

      <Form> 

        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 20}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <InputLabel> Nome<span> *</span> </InputLabel>
                  <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
                </div>

                <div style={{display:"flex",flexDirection:"column"}}>
                  <InputLabel> Idade<span> *</span> </InputLabel>
                  <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
                </div>
            </div>

          <div style={{display:"flex",flexDirection:"column"}}>
            <InputLabel> E-mail<span> *</span> </InputLabel>
            <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} style={{width:480}}/>
          </div>

        </ContainerInputs>

        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usúario</Button>

      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>

   </Container>

  )
}

export default Home
