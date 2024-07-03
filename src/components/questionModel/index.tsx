
import * as Css from './style'
import { Button } from '../../global/button.style';

interface ModelProps {
    modelIndex: number;
    setModelIndex: (index: number) => void;
    icons: string[];
    buttonData: null[];
}

const QuestionModel: React.FC<ModelProps> = ({ modelIndex, setModelIndex, icons, buttonData }) => {

    return <Css.QuestionModel>
        <Button
            width='100px'
            onClick={() => { setModelIndex(1) }}
            className={modelIndex === 1 ? 'Checked' : 'Check'}
        >
            {modelIndex === 1 ? 'Checked' : 'Check'}
        </Button>

        <div>
            {buttonData.map((_, index) => (
                <img
                    key={index}
                    src={''}
                    alt=""
                />
            ))}
        </div>
    </Css.QuestionModel>
}

export default QuestionModel;