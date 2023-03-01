import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Title } from './styles'

export function HeaderOptions() {
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
       Nova refeição
      </Title>
    </Container>
  )
}