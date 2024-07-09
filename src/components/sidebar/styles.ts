
import styled from "styled-components";

interface sidebarProps {
    visible?: boolean;
}

export const SidebarContainer = styled.div<sidebarProps>`
    position: relative;
    width: ${props => props.visible ? '20%' : '70px'};
    height: 100%;
    background-color: rgb(40,40,40);
    z-index: 3;
    transition: 250ms;

    button{
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: rgb(40,40,40);
        color: white;
        right: -11px;
        top: 20px;
        font-weight: bold;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
        transition: 250ms;
    }

    button:hover{
        background-color: rgb(80,80,80);
    }
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

export const SidebarItem = styled.li<sidebarProps>`
    font-size: 1.4rem;
    color: white;
    padding: ${props => props.visible ? '20px 40px' : '10px'};
    margin-top: 5px;
    color: gray;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: ${props => props.visible ? '' : 'center'};
    transition: 250ms;

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
        margin-right: ${props => props.visible ? '10px' : '0px'};
        transition: 150ms;
        filter: invert(40%);
    }
`

