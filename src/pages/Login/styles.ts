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
    text-align: center;
    box-shadow: 2px 5px 15px gray;
`

export const TitleSignInForm = styled.h1`
    font-size: 3rem;
    color: rgb(40,40,40);
    margin-top: 20px;
    margin-bottom: 30px;
`

export const SignInInput = styled.input`
    padding: 15px 30px;
    width: 60%;
    margin: 0 auto;
    margin-top: 30px;
    border: none;
    font-size: 16px;
    box-shadow: 2px 5px 10px rgb(200,200,200);

    &:focus{
        outline: none;
    }
`





