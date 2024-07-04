import styled from "styled-components"

export const SettingsContainer = styled.div`
    width: 80%;
    height: 100vh;
    position: relative;
    overflow-y: scroll;

    h2{
        margin-top: 50px;
        margin-left: 50px;
        font-size: 2.5rem;
        font-weight: 300;
    }

    h3{
        font-size: 1.8rem;
        font-weight: 300; 
        margin-left: 50px;
    }

    p{
        margin: 5px 10px 50px 50px;
    }

    img{
        width: 45px;
        height: 45px;
        margin-left: 5px;
        scale: 0.8;
    }
`

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
`;

export const SettingsForm = styled.form`
    margin: 50px;
    width: 400px;

    label{
        font-size: 14px;
    }

    input[type='text']{
        width: 200px;
        padding: 8px;
    }

    input[type='checkbox']{
        margin: 20px;
    }

    textarea{
        width: 300px;
        padding: 8px;
        min-height: 100px;
    }
`;

export const CustomizeButton = styled.button`
    margin-left: 20px;
    background-color: rgb(40,40,40);
    padding: 7px 10px;
    color: white;
    font-size: 14px;
`
