import * as Css from './styles'
import { NavLink } from 'react-router-dom';
import * as icon from '../../global/icons';
import { useState } from 'react';

const Sidebar = () => {

    const [isVisible, SetIsVisible] = useState<boolean>(true)

    return (
        <Css.SidebarContainer visible={isVisible}>
            <button
                onClick={() => { SetIsVisible(props => !props) }}
            >
                esconder
            </button>

            <Css.SidebarList>
                <NavLink to={'/csat/settings'}>
                    <Css.SidebarItem>
                        <img src={icon.settingsIcon} alt="" />
                        SETTINGS
                    </Css.SidebarItem>
                </NavLink>

                <NavLink to={'/'}>
                    <Css.SidebarItem>
                        <img src={icon.templateIcon} alt="" />
                        TEMPLATE
                    </Css.SidebarItem>
                </NavLink>
            </Css.SidebarList>
        </Css.SidebarContainer >
    )
}

export default Sidebar;