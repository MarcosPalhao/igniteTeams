import { Container, Logo, BackIcon, BackButton } from "./styles";
import { useNavigation } from '@react-navigation/native'
import LogoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('groups');
    }

    return ( 
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={LogoImg} />
        </Container>
    )
}