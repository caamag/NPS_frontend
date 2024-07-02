import React from 'react';
import * as Css from './style'

interface PrevieProps {
    iconsList: string[];
    numberIcons: string;
    NPS: boolean;
    comment: boolean;
    questions?: string[]
}

const Preview: React.FC<PrevieProps> = ({ iconsList, numberIcons, NPS, comment }) => {

    const questions = ['Question1', 'Question2', 'Question3'];
    console.log(iconsList);


    return (
        <Css.PreviewContainer>
            <h1 style={{ textAlign: 'center', fontSize: '28px' }}>Preview</h1><br />

            {questions.map((question, index) => (
                <Css.Question>
                    <h2 key={index}>{question}</h2>
                    <Css.iconsContainer>

                    </Css.iconsContainer>

                </Css.Question>
            ))}

        </Css.PreviewContainer>
    )

}

export default Preview;