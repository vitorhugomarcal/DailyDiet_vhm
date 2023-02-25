import { TouchableOpacityProps } from "react-native";
import { ButtonStatusStyleProps, Container, HourTitle, Status, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  hour: string;
  type?: ButtonStatusStyleProps;
}

export function Meal({ title, type = 'PRIMARY', hour, ...rest}:Props ) {
  return (
    <Container {...rest}>
      <HourTitle>{hour}</HourTitle>
      <Title>{title}</Title>
      <Status type={type} />
    </Container>
  )
}