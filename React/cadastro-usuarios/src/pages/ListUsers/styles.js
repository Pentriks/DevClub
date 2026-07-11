import styled from "styled-components"

export const Container = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
`

export const ContainerUser = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;
margin-top: 2.5vh;
cursor: pointer;

@media (max-width: 964px){
    grid-template-columns: 1fr;
}

`

export const CardUsers = styled.div`
color: white;
background-color: #252d48;
padding: 16px;
border-radius: 32px;
display: flex;
align-items: center;
gap: 20px;
transition: transform 0.3s ease-in-out;

&:hover{
    transform: scale(1.05);
    transition: all .2s ease-in-out;
}

div {
    flex-grow: 1;
}

h3 {
    font-size: 24px;
    text-transform: capitalize;
}
`

export const TrashIcon = styled.img`
cursor: pointer;
transition: transform 0.3s ease-in-out;

&:hover{
    transform: scale(1.12);
    opacity: .8;
    transition: all .3s ease-in-out;
}

&:active{
    opacity: 0.5;
    transition: opacity .2s ease-in-out;
}
`

export const AvatarUser = styled.img`
border-radius: 25px;
height: 80px;
`