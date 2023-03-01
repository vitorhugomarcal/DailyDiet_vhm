import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Subtitle, Title } from './styles'

export function HeaderInfo() {
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
        90,86%
      </Title>
      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>
    </Container>
  )
}