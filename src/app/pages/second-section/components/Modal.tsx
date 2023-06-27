import { ModalBody, ModalHeader, StyledModal, StyledModalWrapper } from "../styles"

export const Modal = ({ onClose, children, title }: any) => {
    const handleClose = (e: any) => {
        e.preventDefault()
        onClose()
    }

    return (
        <StyledModal>
            <StyledModalWrapper>
                <ModalBody>
                    <ModalHeader>
                        <span
                            onClick={handleClose}
                            style={{
                                color: '#aaaaaa',
                                float: 'right',
                                fontSize: '28px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            &times;
                        </span>
                        {title && <h4>{title}</h4>}
                    </ModalHeader>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        {children}
                    </div>
                </ModalBody>
            </StyledModalWrapper>
        </StyledModal>
    )
}