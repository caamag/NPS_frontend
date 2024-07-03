import styled from "styled-components";

export const PreviewContainer = styled.div`
    position: absolute;
    height: 60vh;
    width: 40%;
    top: 150px;
    right: 50px;
    box-shadow: 0px 0px 10px gray;
    overflow-y: scroll;
    padding: 15px;

    @media screen and (max-width: 1150px) {
        display: none;
    }

    @media screen and (min-width: 1500px) {
        width: 600px;
        left: 700px;
    }
`;

export const Question = styled.div`
    width: 100%;
    margin: 0 auto;

    h4{
        margin: 0px 0px 5px 60px;
    }

    textarea{
        margin-left: 50px;
        width: 250px;
        min-height: 80px;
    }
`

export const iconsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 50px;
    margin-bottom: 20px;

    img{
        width: 25px !important;
        height: 25px !important;
    }
`

export const npsBox = styled.div`
    width: 30px;
    height: 30px;
    background-color: red;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`
