import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps
  isActive?: boolean;
}

export function ButtonDiet({ title, type = 'PRIMARY', isActive = false, ...rest }:Props) {
  return (
    <Container type={type} isActive={isActive}  {...rest}>
      <Icon type={type}/>
      <Title type={type}>{title}</Title>
    </Container>
  )
}