import * as Css from './styles'
import GlobalStyle from '../../global/styles'
import { Button } from '../../global/button.style'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
        <Css.SignInContainer>
            <GlobalStyle />

            <Css.SignInForm>
                <h1 style={{ color: 'rgb(40,40,40)', fontSize: '3rem' }}>
                    Entrar
                </h1>

                <Css.SignInInput
                    placeholder='E-mail:'
                    required
                    value={email}
                    type='email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <Css.SignInInput
                    placeholder='Senha:'
                    required
                    type='password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                /><br />

                <Button primary width='63%'>Entrar</Button>
            </Css.SignInForm>
        </Css.SignInContainer>
    )
}

export default Login;