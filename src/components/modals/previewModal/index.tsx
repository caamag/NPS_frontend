
import * as Css from './style'
import { Button } from '../../../global/button.style'
import { useState } from 'react'

interface PreviewModalProps {
    setPreviewModal: (previewModal: boolean) => void
    setImageUrl: (url: string) => void
}

const PreviewModal: React.FC<PreviewModalProps> = ({ setPreviewModal, setImageUrl }) => {

    const [newImageUrl, setNewImageUrl] = useState<string>('')

    const handleImageUrl = () => {
        setImageUrl(newImageUrl);
    }

    return (
        <Css.ModalContainer>
            <Css.Modal>
                <Css.CloseBtn onClick={() => { setPreviewModal(false) }}>x</Css.CloseBtn>

                <input
                    type="text"
                    placeholder='Insert the image url:'
                    value={newImageUrl}
                    onChange={(e) => { setNewImageUrl(e.target.value) }}
                /><br />

                <Button width='100px' onClick={() => { handleImageUrl() }}>Submit</Button>
            </Css.Modal>
        </Css.ModalContainer>
    )
}

export default PreviewModal;