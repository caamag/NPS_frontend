
import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(40,40,40, 0.9);
`

export const Modal = styled.div`
    position: relative;
    width: 25%;
    height: 50%;
    margin-right: 20%;
    padding: 15px;
    background-color: white;

    h3{
        margin: 15px 0px 5px 0px;
    }

    input[type=color]{
        margin-right: 5px;
        border: none;
        background: none;
        cursor: pointer;
    }

    input[type=text]{
        padding: 5px;
    }
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: rgb(40,40,40);
`