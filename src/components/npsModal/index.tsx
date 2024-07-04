import * as Css from './style'
import { Button } from '../../global/button.style';
import { useState } from 'react';

interface NpsModalProps {
    setColors: (colors: string[]) => void
    setNpsConfig: boolean | any
}

const NpsModal: React.FC<NpsModalProps> = ({ setColors, setNpsConfig }) => {
    const [inputColor, setInputColor] = useState<string[]>(['', '', ''])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        const newColors = [...inputColor];
        newColors[index] = e.target.value;
        setInputColor(newColors)
    }

    function handleClick(): void {
        setColors(inputColor)
        setNpsConfig(false)
    }

    return (
        <Css.ModalContainer>
            <Css.Modal>
                <input
                    type="color"
                    onChange={(e) => { handleChange(e, 0) }}
                />

                <input
                    type="color"
                    onChange={(e) => { handleChange(e, 1) }}
                />

                <input
                    type="color"
                    onChange={(e) => { handleChange(e, 2) }}
                />

                <Button width='200px' onClick={handleClick}>Submit</Button>
            </Css.Modal>
        </Css.ModalContainer>
    )
}

export default NpsModal;