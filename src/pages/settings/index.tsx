import * as Css from './style'
import { useState } from 'react';
import { Button } from '../../global/button.style';
import Preview from '../../components/preview';

//icons
import emptyStar from '../../assets/emptyStar.png'
import yellowStar from '../../assets/yellowStar.png'
import badEmoji from '../../assets/pessimo.png'
import sadEmoji from '../../assets/triste.png'
import neutralEmoji from '../../assets/neutro.png'
import happyEmoji from '../../assets/feliz.png'
import veryHappyEmoji from '../../assets/muito-feliz.png'

const Settings = () => {

    const buttonData = Array(5).fill(null)
    const [rating, setRating] = useState<number>(0);
    const [modelIndex, setModelIndex] = useState<number | null>(null);
    const [npsQuestion, setNpsQuestion] = useState<boolean>(false)
    const [comment, setComment] = useState<boolean>(false)
    const [numberIcons, setNumberIcons] = useState<string>('')

    const emojiLis: string[] = [badEmoji, sadEmoji, neutralEmoji, happyEmoji, veryHappyEmoji]
    const icons = modelIndex === 1 ? [emptyStar, yellowStar] : emojiLis;


    function handleClick(index: number) {
        setRating(index + 1)
    }

    return (
        <Css.SettingsContainer>
            <h2>CSAT Settings</h2>
            <p>Here your can change icons, template and configure some options in your csat template.</p>

            <h3>Question model:</h3>
            <Css.QuestionModel>
                <Button
                    width='100px'
                    onClick={() => { setModelIndex(1) }}
                    className={modelIndex === 1 ? 'checked' : ''}
                >
                    {modelIndex === 1 ? 'Checked' : 'Check'}
                </Button>

                <div>
                    {buttonData.map((_, index) => (
                        <img
                            key={index}
                            src={index < rating ? yellowStar : emptyStar}
                            alt="star icon"
                            onClick={() => { handleClick(index) }}
                        />
                    ))}
                </div>
            </Css.QuestionModel>

            <Css.QuestionModel>
                <Button
                    width='100px'
                    onClick={() => { setModelIndex(2) }}
                    className={modelIndex === 2 ? 'checked' : ''}>
                    {modelIndex === 2 ? 'Checked' : 'Check'}
                </Button>

                <div>
                    {buttonData.map((_, index) => (
                        <img
                            className={``}
                            key={index}
                            src={emojiLis[index]}
                            alt="emoji icon"
                        />
                    ))}
                </div>
            </Css.QuestionModel><br /><br /><br /><br />

            <Css.QuestionModel>
                <Button
                    width='100px'
                    onClick={() => { setNpsQuestion(nps => !nps) }}
                    className={npsQuestion ? 'checked' : ''}>
                    {npsQuestion ? 'Checked' : 'Check'}
                </Button>
                <h3>Do you want NPS question?</h3>
            </Css.QuestionModel>

            <Css.QuestionModel>
                <Button
                    width='100px'
                    onClick={() => { setComment(comment => !comment) }}
                    className={comment ? 'checked' : ''}>
                    {comment ? 'Checked' : 'Check'}
                </Button>
                <h3>Do you want comment field?</h3>
            </Css.QuestionModel>

            <Css.SettingsForm>
                <label>
                    Number of icons: <br /><br />
                    <input
                        type="text"
                        placeholder='Number:'
                        value={numberIcons}
                        onChange={(e) => { setNumberIcons(e.target.value) }}
                    />
                </label><br /><br />
            </Css.SettingsForm>

            <Preview
                iconsList={icons ? icons : [emptyStar, yellowStar]}
                numberIcons={numberIcons}
                NPS={true}
                comment={true}
            />
        </Css.SettingsContainer >
    )
}

export default Settings;