import styled from 'styled-components'

export const SignInContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SignInForm = styled.form`
    width: 500px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 15px rgb(200,200,200);
`

export const SignInInput = styled.input`
    padding-left: 15px;
    height: 50px;
    width: 60%;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid rgb(200,200,200);
    font-size: 16px;

    &:focus{
        outline: none;
        border: 1.5px solid #054f77;
        box-shadow: 0px 0px 5px #054f77;
    }
`





