
import styled from 'styled-components'

interface ButtonProps {
    primary?: boolean
    width: string
}

export const Button = styled.button<ButtonProps>`
    width: ${props => props.width};
    padding: 15px;
    font-size: 18px;
    border: ${props => props.primary ? 'none' : 'rgb(40,40,40)'};
    background: ${props => props.primary ? '#054f77' : 'none'};
    color: ${props => props.primary ? 'white' : 'rgb(40,40,40)'};
    margin-top: 20px;
    box-shadow: ${props => props.primary ? '0px 0px 15px #054f77' : 'none'};
`