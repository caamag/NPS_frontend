import * as Css from './styles'
import GlobalStyle from '../../global/styles'
import { Button } from '../../global/button.style'

const Login = () => {
    return (
        <Css.SignInContainer>
            <GlobalStyle />

            <Css.SignInForm>
                <h1 style={{ marginTop: '30px', color: 'rgb(40,40,40)', fontSize: '3rem' }}>
                    Entrar
                </h1>

                <Css.SignInInput
                    placeholder='E-mail:'
                />

                <Css.SignInInput
                    placeholder='Senha:'
                /><br />

                <Button primary width='60%'>Entrar</Button>
            </Css.SignInForm>
        </Css.SignInContainer>
    )
}

export default Login;