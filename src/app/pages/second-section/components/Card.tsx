/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

import { CardFooter, CardHeader, Description, Downloads, ModalHorizontalLine, StyledCard, Text } from "../styles"
import { Modal } from "./Modal"
import { CloudDownload } from "@styled-icons/bootstrap/CloudDownload"

const documents = [
    { id: 0, title: 'Spreadsheet.xls', backgroundColor: '#C2F4EA', color: '#0EC19E' },
    { id: 1, title: 'Document.doc', backgroundColor: '#C2E6FF', color: '#81C4FA' },
    { id: 2, title: 'Presentation.ppt', backgroundColor: '#FFF8D0', color: '#B7A136' },
]

export const Card = ({ image, title }: any) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <StyledCard>
                <CardHeader>
                    <button style={{ padding: 0, borderStyle: 'none', cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                        <img
                            src={image}
                            alt="thumbnail"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </button>
                </CardHeader>
                <CardFooter>
                    <Text>{title}</Text>
                </CardFooter>
            </StyledCard>
            {showModal &&
                <Modal onClose={() => setShowModal(false)}>
                    <span
                        style={{
                            color: '#007dff',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontWeight: '600',
                            marginBottom: '3px',
                            fontSize: '18px'
                        }}
                    >
                        Webinar
                    </span>
                    <span
                        style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontWeight: '600',
                            fontSize: '18px',
                            marginBottom: '25px'
                        }}
                    >
                        Como aumentar sua Geração de Leads feat.Traktor
                    </span>
                    <div>
                        <video width="530" controls>
                            <source src="mov_bbb.mp4" type="video/mp4" />
                        </video>
                        <h4
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                marginLeft: '15px',
                                marginBottom: '10px'
                            }}
                        >
                            Descrição
                        </h4>
                        <ModalHorizontalLine />
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam eget ligula eu lectus lobortis condimentum. 
                            Aliquam nonummy auctor massa. Pellentesque habitant 
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </Description>
                        <h4
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                marginLeft: '15px',
                                marginBottom: '10px'
                            }}
                        >
                            Downloads
                        </h4>
                        <ModalHorizontalLine />
                        <Downloads>
                            {documents.map((document) => {
                                return (
                                    <div key={document.id}>
                                        <button
                                            style={{
                                                border: `0.5px solid ${document.backgroundColor}`,
                                                borderRadius: '5px',
                                                boxSizing: 'border-box',
                                                color: document.color,
                                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                                fontSize: '.875rem',
                                                fontWeight: '600',
                                                lineHeight: '1rem',
                                                backgroundColor: document.backgroundColor,
                                                padding: '.25rem',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <i>
                                                <CloudDownload style={{ width: 15, marginRight: 5 }} />
                                            </i>
                                            {document.title}
                                        </button>
                                    </div>
                                )
                            })}
                        </Downloads>
                    </div>
                </Modal>
            }
        </>
    )
}