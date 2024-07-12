import styled from "styled-components";

interface PreviewProps {
    isPreview: boolean
}

export const PreviewContainer = styled.div<PreviewProps>`
    position: absolute;
    max-height: 60vh;
    width: 40%;
    top: 150px;
    right: 50px;
    box-shadow: 0px 0px 10px gray;
    padding: 15px;
    background-color: white;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 5px;
    }

    &::-webkit-scrollbar-track{
        background: transparent;
    }

    &::-webkit-scrollbar-thumb{
        background-color: rgb(40,40,40);
        border-radius: 3px;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        height: 140vh;
        max-height: 140vh;
        top: 50px;
        left: 0px;
        box-shadow: none;
        display: ${props => props.isPreview ? 'block' : 'none'};
    }

    @media screen and (min-width: 501px) and (max-width: 1150px) {
        width: 100%;
        height: 140vh;
        max-height: 140vh;
        top: 50px;
        left: 0px;
        box-shadow: none;
        display: ${props => props.isPreview ? 'block' : 'none'};
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

interface NpsBoxPorps {
    index: number;
    badColor?: string;
    neutralColor?: string;
    greatColor?: string;
    radius?: string;
    fontColor?: string;
}

export const npsBox = styled.div<NpsBoxPorps>`
    width: 35px;
    height: 27px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 5px;
    border: ${props => props.badColor
        || props.neutralColor
        || props.greatColor ?
        'none' : 'solid 1px black'
    };

    background-color: ${({ index, badColor, neutralColor, greatColor }) => {
        if (index <= 6) return badColor
        if (index <= 8) return neutralColor
        return greatColor
    }};

    border-radius: ${props => props.radius ? props.radius : '0px'};
    color: ${props => props.fontColor ? props.fontColor : 'black'};
`

export const editBtn = styled.button`
    position: absolute;
    top: 15px;
    left: 15px;
    width: 25px;
    height: 25px;
    background: none; 

    img{
        width: 100%;
        height: 100%;
    }
`

export const OpenPreviewBtn = styled.button`
    margin: 50px;
    padding: 15px;
    border: solid 1px rgb(40,40,40);
    font-size: 16px;
    font-weight: 400;
    transition: 150ms;
    display: none;

    &:hover{
        background-color: rgb(40,40,40);
        color: white;
    }

    @media screen and (max-width: 950px) {
        margin: 10px;
    }

    @media screen and (max-width: 1150px) {
        display: block;
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
    display: none;

    @media screen and (max-width: 1150px) {
        display: block;
        right: 40px;
        padding: 5px 10px;
    }
`