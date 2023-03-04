import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Subtitle, Title } from './styles'

export interface HeaderInfoProps {
  percentage: string;
}

export function HeaderInfo({percentage}: HeaderInfoProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      <Title>
        {percentage}%
      </Title>
      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>
    </Container>
  )
}