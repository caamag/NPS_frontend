import styled from 'styled-components'
import GlobalStyle from './global/styles'
import { Outlet } from 'react-router-dom'

//components
import Sidebar from './components/sidebar'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <Outlet />
    </Container>
  )
}

export default App;
