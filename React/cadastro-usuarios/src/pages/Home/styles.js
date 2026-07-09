import styled from 'styled-components'

export const Title = styled.h2`
    font-size: 40px;
`
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #181f36;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 45vw;
    margin-top: 5vh;
    color: white;
`
export const ContainerInputs = styled.main`
    display: flex;
    flex-direction: column;
    width: 45vw;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 15px;

`
export const Input = styled.input`
    padding: 20px;
    height: 45px;
    width: 230px;
    border: 1px solid #d2dae2;
    background-color:#fff;
    outline: none;
    border-radius: 10px;
    
`

export const InputLabel = styled.label`
    font-weight: bold;
    span {
        color: #ef4f45;
        font-weight: bold;
    }
`
