import { StyledButton } from "../styles/Main"

export const Button = ({ title }: any) => {
    return (
        <StyledButton type="button">
            {title}
        </StyledButton>
    )
}