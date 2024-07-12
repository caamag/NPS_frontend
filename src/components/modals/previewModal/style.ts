import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0px;
    background-color: rgb(40,40,40, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

export const Modal = styled.div`
    position: relative;
    width: 400px;
    height: 50%;
    padding: 15px;
    background-color: white;

    input{
        width: 70%;
        margin-top: 20px;
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