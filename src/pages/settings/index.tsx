import * as Css from './style'
import { useState } from 'react';
import { Button } from '../../global/button.style';
import Preview from '../../components/preview';
import QuestionModel from '../../components/questionModel';
import NpsModal from '../../components/modals/npsModal';
import * as icon from '../../global/icons';

const Settings = () => {

    const buttonData = Array(5).fill(null)
    const [modelIndex, setModelIndex] = useState<number | null>(null)

    const [npsQuestion, setNpsQuestion] = useState<boolean>(false)
    const [comment, setComment] = useState<boolean>(false)
    const [numberIcons, setNumberIcons] = useState<string>('5')
    const [questions, setQuestions] = useState<string>('Example')
    const [npsTitle, setNPSTitle] = useState<string>('')
    const [commentTitle, setCommentTitle] = useState<string>()
    const [npsConfig, setNpsConfig] = useState<boolean | null>(false)
    const [colors, setColors] = useState<string[]>([])
    const [borderRadius, setBorderRadius] = useState<string>('')
    const [fontColor, setFontColor] = useState<string>('')

    const emojiList: string[] = [icon.badEmoji, icon.sadEmoji, icon.neutralEmoji, icon.happyEmoji, icon.veryHappyEmoji];
    const icons = modelIndex === 2 ? emojiList : [icon.emptyStar, icon.yellowStar];

    return (
        <Css.SettingsContainer>
            <h2>CSAT Settings</h2>
            <p>Here your can change icons, template and configure some options in your csat template.</p>

            <h3>Question model:</h3>

            <QuestionModel
                modelIndex={modelIndex}
                setModelIndex={setModelIndex}
                buttonData={buttonData}
            />

            <Css.SettingsForm>
                {modelIndex === 1 && (
                    <>
                        <label>
                            Number of icons: <br /><br />
                            <input
                                type="text"
                                placeholder='Number:'
                                value={numberIcons}
                                onChange={(e) => {
                                    setNumberIcons(Number(e.target.value) > 10 ? '10' : e.target.value)
                                }}
                                required
                            />
                        </label><br /><br /><br /><br />
                    </>
                )}

                <label>
                    Define questions separated by " ; "<br /><br />
                    <textarea
                        value={questions}
                        placeholder='Define questions:'
                        onChange={(e) => { setQuestions(e.target.value) }}
                        required
                    ></textarea>
                </label>
            </Css.SettingsForm>

            <Css.QuestionModel>
                <Button
                    width='100px'
                    onClick={() => { setNpsQuestion(nps => !nps) }}
                    className={npsQuestion ? 'checked' : ''}>
                    {npsQuestion ? 'Checked' : 'Check'}
                </Button>
                <h3>Do you want NPS question?</h3>
            </Css.QuestionModel>

            {npsQuestion && (
                <>
                    <input
                        style={{ marginLeft: '50px', padding: '5px' }}
                        type="text"
                        placeholder='Insert the NPS title:'
                        required
                        value={npsTitle}
                        onChange={(e) => { setNPSTitle(e.target.value) }}
                    />
                    <Css.CustomizeButton
                        onClick={() => { setNpsConfig(config => !config) }}>
                        customize
                    </Css.CustomizeButton>
                </>
            )}

            <Css.QuestionModel>
                <Button
                    width='100px'
                    onClick={() => { setComment(comment => !comment) }}
                    className={comment ? 'checked' : ''}>
                    {comment ? 'Checked' : 'Check'}
                </Button>
                <h3>Do you want comment field?</h3>
            </Css.QuestionModel>

            {comment && (
                <input
                    style={{ marginLeft: '50px', padding: '5px' }}
                    type="text"
                    placeholder='Insert the comment title:'
                    required
                    value={commentTitle}
                    onChange={(e) => { setCommentTitle(e.target.value) }}
                />
            )}

            {npsConfig && (
                <NpsModal
                    setColors={setColors}
                    setNpsConfig={setNpsConfig}
                    setBorderRadius={setBorderRadius}
                    setFontColor={setFontColor}
                />
            )}

            <Preview
                iconsList={icons}
                numberIcons={numberIcons}
                NPS={npsQuestion}
                NPSTitle={npsTitle}
                fontColor={fontColor}
                borderRadius={borderRadius}
                colors={colors}
                comment={comment}
                commentTitle={commentTitle}
                questions={questions}
            />
        </Css.SettingsContainer >
    )
}

export default Settings;