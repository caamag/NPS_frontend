import React from 'react';
import * as Css from './style'
import * as icon from '../../global/icons'

interface PreviewProps {
    iconsList: string[];
    numberIcons: string;
    NPS: boolean;
    NPSTitle?: string;
    comment: boolean;
    commentTitle?: string;
    questions: string;
    colors: string[];
    fontColor: string;
    borderRadius: string
}

const Preview: React.FC<PreviewProps> = ({
    iconsList,
    numberIcons,
    NPS,
    NPSTitle,
    comment,
    commentTitle,
    questions,
    colors,
    fontColor,
    borderRadius,
}) => {

    const questionsSplited = questions.split(';')
    const emojiLis: string[] = [icon.badEmoji, icon.sadEmoji, icon.neutralEmoji, icon.happyEmoji, icon.veryHappyEmoji];


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
                            <img src={icon.emptyStar} alt="" key={idx} />
                        ))}
                    </Css.iconsContainer><br />

                </Css.Question>
            ))}

            {NPS && <>
                <Css.Question>
                    <h4>{NPSTitle}</h4><br />
                    <Css.iconsContainer>
                        {Array.from({ length: 11 }, (_, index) => (
                            <Css.npsBox
                                key={index}
                                index={index}
                                badColor={colors[0]}
                                neutralColor={colors[1]}
                                greatColor={colors[2]}
                                radius={borderRadius}
                                fontColor={fontColor}
                            >
                                {index}
                            </Css.npsBox>
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