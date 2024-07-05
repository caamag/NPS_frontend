import * as Css from './style'
import { Button } from '../../global/button.style';
import React, { useState } from 'react';

interface NpsModalProps {
    setColors: (colors: string[]) => void
    setNpsConfig: (npsConfig: boolean) => void
    setBorderRadius: (borderRadius: string) => void
    setFontColor: (fontColor: string) => void
}

const NpsModal: React.FC<NpsModalProps> = ({ setColors, setNpsConfig, setBorderRadius, setFontColor }) => {
    const [inputColor, setInputColor] = useState<string[]>(['', '', ''])

    function handleChangeColor(e: React.ChangeEvent<HTMLInputElement>, index: number): void {
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

                <h3>Background colors</h3>
                <input type="color" onChange={(e) => { handleChangeColor(e, 0) }} />
                <input type="color" onChange={(e) => { handleChangeColor(e, 1) }} />
                <input type="color" onChange={(e) => { handleChangeColor(e, 2) }} /><br />

                <h3>Border (px or %)</h3>
                <input type="text" placeholder='PX:' onChange={(e) => { setBorderRadius(e.target.value) }} /><br />

                <h3>Font Color</h3>
                <input type="text"
                    placeholder='Color:'
                    className='font-color-input'
                    onChange={(e) => { setFontColor(e.target.value) }} /><br />

                <Button width='100px' onClick={handleClick}>Submit</Button>

                <Css.CloseBtn onClick={() => { setNpsConfig(false) }}>x</Css.CloseBtn>
            </Css.Modal>
        </Css.ModalContainer>
    )
}

export default NpsModal;