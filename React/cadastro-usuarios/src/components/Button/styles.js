import styled from 'styled-components'

export const Button = styled.button`
   color: white;
    border: ${(props) => props.theme === 'primary' ? 'none' : 'solid 1px white'};
    background: ${(props) => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    margin-top: 28px;
    padding: 15px 25px;
    font-size: 16px;
    z-index: 0;
    border-radius: 10px;
    cursor: pointer;
    width: fit-content;
    box-shadow: ${(props) => props.theme === 'primary' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in;
    position: relative;

    &::after {
        content: ${(props) => props.theme === 'primary' ? '""' : 'none'};
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    &::before {
        content: ${(props) => props.theme === 'primary' ? '"Cadastrar"' : 'none'};
        background: linear-gradient(45deg, #fe7e3d, #ff6378, #FF0000, #fe7e1d);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 600%;
        z-index: -1;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        filter: blur(8px);
        animation: ${(props) => props.theme === 'primary' ? 'glowing 20s linear infinite' : 'none'};
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
        transform: ${(props) => props.theme === 'primary' ? 'scale(1.10)' : 'scale(1.10)'};
    }

    &:hover::before {
        opacity: ${(props) => props.theme === 'primary' ? '1' : '0'};
    }

    &:active::after {
        background: transparent;
    }

    &:active {
        opacity: .8;
        transition: all 0.2s ease-in-out;
    }
`