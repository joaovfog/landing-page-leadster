/* eslint-disable @next/next/no-img-element */
import { Cases, FacebookIcon, FollowLeadster, HorizontalLine, InstagramIcon, LinkedinIcon, Main, MainLinks, Materials } from "./styles";

export default function Footer() {
    return (
        <>
            <Main>
                <img
                    src="/assets/logo.png"
                    alt="logo"
                    style={{
                        width: 160,
                        height: 'auto'
                    }}
                />
                <p
                    style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.58rem',
                        color: 'grey'
                    }}
                >
                    Transformando visitantes em clientes.
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '10rem'
                    }}
                >
                    <MainLinks>
                        <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Links Principais</h5>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Ferramenta
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Preços
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Contato
                        </a>
                    </MainLinks>
                    <Cases>
                        <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Cases</h5>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Geração de Leads B2B
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Geração de Leads em Software
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Geração de Leads em Imobiliária
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Cases de Sucesso
                        </a>
                    </Cases>
                    <Materials>
                        <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Materiais</h5>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Blog
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Parceria com Agências
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Guia Definitivo do Marketing
                        </a>
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'grey',
                                textDecoration: 'none',
                                fontSize: '0.7rem',
                                marginBottom: '1rem'
                            }}
                        >
                            Materiais Gratuitos
                        </a>
                    </Materials>
                    <FollowLeadster>
                        <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Siga a Leadster</h5>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
                            <LinkedinIcon />
                            <FacebookIcon />
                            <InstagramIcon />
                        </div>
                    </FollowLeadster>
                </div>
                <HorizontalLine />
            </Main>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <h5
                    style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        color: 'grey',
                        fontSize: '0.6rem'
                    }}
                >
                    Copyright @ 2015 - 2022 Todos os direitos reservados
                </h5>
                <h5
                    style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        color: 'grey',
                        fontSize: '0.6rem'
                    }}
                >
                    Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
                </h5>
            </div>
        </>
    )
}