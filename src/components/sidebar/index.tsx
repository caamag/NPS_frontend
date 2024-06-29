import * as Css from './styles'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Css.SidebarContainer>
            <h1>CSAT Manager</h1>

            <h3>CSAT</h3>
            <Css.SidebarList>
                <NavLink to={'/csat/settings'}><Css.SidebarItem>SETTINGS</Css.SidebarItem></NavLink>
                <NavLink to={'/'}><Css.SidebarItem>TEMPLATE</Css.SidebarItem></NavLink>
            </Css.SidebarList>


        </Css.SidebarContainer >
    )
}

export default Sidebar;