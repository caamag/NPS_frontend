import styled from "styled-components";

export const QuestionModel = styled.div`
    width: 400px;
    height: 80px;
    display: flex;
    margin-left: 50px;

    .checked{
        background-color: rgb(40,40,40);
        color: white;
    }

    h3{
        margin-top: 35px;
    }

    div{
        margin-left: 30px;
        display: flex;
        align-items: center;
        margin-top: 5px;
        padding: 10px;
    }

    @media screen and (max-width: 950px) {
        margin-left: 10px;

        div{
            margin-left: 0px;
        }
    }   
`;