
import styled from 'styled-components'

interface ButtonProps {
    primary?: boolean
    width: string
}

export const Button = styled.button<ButtonProps>`
    width: ${props => props.width};
    height: 50px;
    font-size: 16px;
    border: ${props => props.primary ? 'none' : '1px solid rgb(40,40,40)'};
    background: ${props => props.primary ? 'rgb(40,40,40)' : 'none'};
    color: ${props => props.primary ? 'white' : 'rgb(40,40,40)'};
    margin-top: 20px;
    transition: 150ms;

    &:hover{
        background-color: ${props => props.primary ? 'none' : 'rgb(40,40,40)'};
        color: white;
    }
`