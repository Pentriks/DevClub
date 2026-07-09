import styled from 'styled-components'

export const Button = styled.button`
    color: white;
    border: none;
    background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
    margin-top: 28px;
    padding: 15px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 16px;
    z-index: 0;
    border-radius: 10px;
    cursor: pointer;
    width: fit-content;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Transição suave para todas as alterações (cor e tamanho) */
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in;
    position: relative;

    &::after {
        content: "";
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    &::before {
        content: "Cadastrar";
        background: linear-gradient(45deg, #fe7e3d, #ff6378, #FF0000, #fe7e1d);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 600%;
        z-index: -1;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        filter: blur(8px);
        animation: glowing 20s linear infinite;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
        opacity: 1;
    }

    @keyframes glowing {
        0% {background-position: 0 0;}
        50% {background-position: 400% 0;}
        100% {background-position: 0 0;}
    }

    &:hover {
        transform: scale(1.10);
    }

    &:hover::before {
        opacity: 1;
    }

    &:active::after {
        background: transparent;
        
    }

    &:active {
        opacity: .8;
        transition: opacity 0.2s ease-in-out;
    }
    
`