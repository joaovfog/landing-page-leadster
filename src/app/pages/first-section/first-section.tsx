import { Main, StyledButton, MainText, Text, HorizontalLine } from "./styles";

export default function FirstSection() {
    return (
        <Main>
            <StyledButton>WEBINAR EXCLUSIVOS</StyledButton>
            <MainText>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>Menos Conversinha,</span>
                <span style={{ color: '#007dff', fontSize: 60, fontWeight: 600, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Mais Conversão
                </span>
            </MainText>
            <HorizontalLine />
            <Text>Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio</Text>
        </Main>
    )
}