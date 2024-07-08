
import styled from "styled-components";

interface sidebarProps {
    visible?: boolean;
}

export const SidebarContainer = styled.div<sidebarProps>`
    width: ${props => props.visible ? '20%' : '5%'};
    height: 100%;
    background-color: rgb(40,40,40);
    z-index: 3;
    transition: 250ms;
`

export const SidebarList = styled.ul`
    width: 100%;
    list-style: none;
    padding-top: 50px;

    a{
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 1.5px;
    }

    .active li{
        background-color: rgb(70,70,70);
        color: white;
    }

    .active img{
        filter: invert(70%);
    }
`

export const SidebarItem = styled.li`
    font-size: 1.4rem;
    color: white;
    padding: 20px 40px;
    margin-top: 5px;
    color: gray;
    font-weight: 400;
    display: flex;
    align-items: center;

    &:hover{
        background-color: rgb(80,80,80);
        color: white;
    }

    &:hover > img{
        filter: invert(70%);
    }

    img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        filter: invert(40%);
        transition: 150ms;
    }
`

