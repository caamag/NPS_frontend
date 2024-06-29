
import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 20%;
    height: 100%;
    background-color: rgb(40,40,40);

    h1{
        font-size: 4rem;
        color: white;
        text-align: center;
        margin-top: 40px;
    }

    h3{
        font-size: 2.5rem;
        color: white;
        margin-top: 50px;
        padding-left: 20px;
    }
`

export const SidebarList = styled.ul`
    width: 100%;
    list-style: none;

    a{
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 1.5px;
    }

    .active li{
        background-color: rgb(80,80,80);
        color: white;
    }
`

export const SidebarItem = styled.li`
    font-size: 1.6rem;
    color: white;
    padding: 20px 40px;
    margin-top: 5px;
    color: gray;

    &:hover{
        background-color: rgb(80,80,80);
        color: white;
    }
`

