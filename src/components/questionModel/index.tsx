
import * as Css from './style'
import { Button } from '../../global/button.style';

//images
import yellowStar from '../../assets/yellowStar.png'
import badEmoji from '../../assets/pessimo.png'
import sadEmoji from '../../assets/triste.png'
import neutralEmoji from '../../assets/neutro.png'
import happyEmoji from '../../assets/feliz.png'
import veryHappyEmoji from '../../assets/muito-feliz.png'

interface ModelProps {
    modelIndex: number | null;
    setModelIndex: (index: number) => void;
    buttonData: null[];
}

const QuestionModel: React.FC<ModelProps> = ({ modelIndex, setModelIndex, buttonData }) => {

    const emojiList = [badEmoji, sadEmoji, neutralEmoji, happyEmoji, veryHappyEmoji]

    return <>
        <Css.QuestionModel>
            <Button
                width='100px'
                onClick={() => { setModelIndex(1) }}
                className={modelIndex === 1 ? 'checked' : 'Check'}
            >
                {modelIndex === 1 ? 'Checked' : 'Check'}
            </Button>

            <div>
                {buttonData.map((_, index) => (
                    <img
                        key={index}
                        src={yellowStar}
                        alt="star icon"
                    />
                ))}
            </div>
        </Css.QuestionModel>

        <Css.QuestionModel>
            <Button
                width='100px'
                onClick={() => { setModelIndex(2) }}
                className={modelIndex === 2 ? 'Checked' : 'Check'}
            >
                {modelIndex === 2 ? 'Checked' : 'Check'}
            </Button>

            <div>
                {buttonData.map((_, index) => (
                    <img
                        key={index}
                        src={emojiList[index]}
                        alt="emoji icon"
                    />
                ))}
            </div>
        </Css.QuestionModel>
    </>
}

export default QuestionModel;