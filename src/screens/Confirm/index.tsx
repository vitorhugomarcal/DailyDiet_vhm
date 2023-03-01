import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Image, Subtitle, Title } from "./styles";
import dietImg from '@assets/dietok.png'

export function Confirm() {
  const navigation = useNavigation()

  function handleHome() {
     navigation.navigate('home')
  }
 
  return (
    <Container>
      <Content>
        <Title>
          Continue assim!
        </Title>
        <Subtitle>
          Você continua dentro da dieta. Muito bem!
        </Subtitle>
        <Image source={dietImg} />
        <Button title="Ir para página inicial" type="TERCIARY" onPress={handleHome}/>

      </Content>      
    </Container>
  )
}