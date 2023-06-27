import { CardFooter, CardHeader, StyledCard, Text } from "../styles"

export const Card = ({ image, title }: any) => {
    return (
        <StyledCard>
            <CardHeader>
                <img 
                    src={image} 
                    alt="thumbnail"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }} 
                />
            </CardHeader>
            <CardFooter>
                <Text>{title}</Text>
            </CardFooter>
        </StyledCard>
    )
}