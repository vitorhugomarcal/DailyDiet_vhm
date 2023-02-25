import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Percentage, PercentCardStyleProps, Subtitle } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  subtitle: string;
  type?: PercentCardStyleProps;
}

export function PercentageCard({ title, subtitle, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon color={type}/>
      <Percentage>
        {title}
      </Percentage>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}