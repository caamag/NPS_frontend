import styled from "styled-components";

export const PreviewContainer = styled.div`
    position: absolute;
    height: 60vh;
    width: 40%;
    top: 150px;
    right: 50px;
    border: solid 1px black;
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
`

export const iconsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 50px;

    img{
        width: 40px;
        height: 40px;
    }
`