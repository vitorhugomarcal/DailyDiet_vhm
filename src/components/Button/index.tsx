import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }:Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} color={type}/>
      <Title type={type}>{title}</Title>
    </Container>
  )
}