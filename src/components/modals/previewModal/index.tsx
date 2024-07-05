
import * as Css from './style'

interface PreviewModalProps {
    setPreviewModal: (previewModal: boolean) => void
}

const PreviewModal: React.FC<PreviewModalProps> = ({ setPreviewModal }) => {
    return (
        <Css.ModalContainer>
            <Css.Modal>
                <Css.CloseBtn onClick={() => { setPreviewModal(false) }}>x</Css.CloseBtn>
            </Css.Modal>
        </Css.ModalContainer>
    )
}

export default PreviewModal;