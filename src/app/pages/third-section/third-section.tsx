/* eslint-disable @next/next/no-img-element */
import { HorizontalLine, Main, StyledButton, Text } from "./styles";

export default function ThirdSection() {
    return (
        <Main>
            <img
                src="/assets/comparativo_img_CTA.png"
                alt="comparativo"
                style={{
                    width: 450,
                    height: 'auto',
                    objectFit: 'contain'
                }}
            />
            <div>
                <Text>
                    Pronto para triplicar sua
                    <br />
                    <span style={{ fontWeight: 600 }}>
                        Geração de Leads?
                    </span>
                    <br />
                    <span
                        style={{
                            fontSize: '14px',
                            fontFamily: 'Plus Jakarta Sans, sans-serif'
                        }}
                    >
                        Criação e ativação em <b>4 minutos.</b>
                    </span>
                </Text>
                <HorizontalLine />
                <div 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        gap: '1rem',
                        marginTop: '1rem'
                    }}
                >
                    <StyledButton>VER DEMONSTRAÇÃO</StyledButton>
                    <img 
                        src="/assets/selo_RD.png" 
                        alt="selo RD"
                        style={{
                            width: 130,
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <img 
                        src="/assets/no-card-dark.webp"
                        alt="nao eh necessario cartao de credito"
                        style={{
                            width: 10,
                            height: 'auto',
                            marginRight: '5px'
                        }}
                    />
                    <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px' }}>
                        Não é necessário Cartão de Crédito | 
                        <img
                            src="/assets/rating.webp"
                            alt="satisfacao"
                            style={{
                                width: 60,
                                height: 'auto',
                                margin: '0 5px 0 5px'
                            }}
                        />
                        4.9/5 média de satisfação
                    </p>
                </div>
            </div>
        </Main>
    )
}