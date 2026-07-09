import { MainBackground } from './styles'
import UsersImage from '../../assets/users.png'

function DefaultTopBackground(){

    return(
        <MainBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
        </MainBackground>
    )

}

export default DefaultTopBackground