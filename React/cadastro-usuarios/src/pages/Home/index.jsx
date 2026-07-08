import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles'
import { useRef } from 'react'
import UsersImage from '../../assets/users.png'


function Home() {

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    function registerNewUser(){
      console.log(inputName.current.value)
    }

  return (

   <Container>

        <TopBackground>
          <img src={UsersImage} alt="imagem-usuarios" style={{width:"100%", height:"100%", paddingLeft: 170, paddingRight: 170}}/>
        </TopBackground>



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

        <Button type='button' onClick={registerNewUser}>Cadastrar Usúario</Button>

      </Form>
      
        


   </Container>

  )
}

export default Home
