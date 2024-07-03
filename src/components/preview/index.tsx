import React from 'react';
import * as Css from './style'

//icons
import emptyStar from '../../assets/emptyStar.png'
import badEmoji from '../../assets/pessimo.png'
import sadEmoji from '../../assets/triste.png'
import neutralEmoji from '../../assets/neutro.png'
import happyEmoji from '../../assets/feliz.png'
import veryHappyEmoji from '../../assets/muito-feliz.png'

interface PreviewProps {
    iconsList: string[];
    numberIcons: string;
    NPS: boolean;
    NPSTitle?: string;
    comment: boolean;
    commentTitle?: string;
    questions: string;
}

const Preview: React.FC<PreviewProps> = ({
    iconsList,
    numberIcons,
    NPS,
    NPSTitle,
    comment,
    commentTitle,
    questions
}) => {

    const questionsSplited = questions.split(';')
    const emojiLis: string[] = [badEmoji, sadEmoji, neutralEmoji, happyEmoji, veryHappyEmoji];


    return (
        <Css.PreviewContainer>
            <h1 style={{ textAlign: 'center', fontSize: '28px' }}>Preview</h1><br />

            {questionsSplited.length > 0 && questionsSplited.map((question, index) => (
                <Css.Question>

                    <h4 key={index}>{question}</h4>
                    <Css.iconsContainer>
                        {iconsList.includes('/src/assets/pessimo.png') && iconsList.map((_, index) => (
                            <img src={emojiLis[index]} alt="" />
                        ))}

                        {!iconsList.includes('/src/assets/pessimo.png') && Array.from({ length: Number(numberIcons) }, (_, idx) => (
                            <img src={emptyStar} alt="" key={idx} />
                        ))}
                    </Css.iconsContainer><br />

                </Css.Question>
            ))}

            {NPS && <>
                <Css.Question>
                    <h4>{NPSTitle}</h4><br />
                    <Css.iconsContainer>
                        {Array.from({ length: 11 }, (_, index) => (
                            <Css.npsBox>{index}</Css.npsBox>
                        ))}
                    </Css.iconsContainer>
                </Css.Question>
            </>}

            {comment && <>
                <Css.Question>
                    <h4>{commentTitle}</h4>
                    <textarea></textarea>
                </Css.Question>
            </>}

        </Css.PreviewContainer>
    )

}

export default Preview;