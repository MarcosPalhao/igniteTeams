import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyledProps, Title } from "./styles";

type Props = TouchableOpacityProps & FilterStyledProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}