import { HeaderInfoProps } from "@components/HeaderInfo";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Percentage, PercentCardStyleProps, Subtitle } from "./styles";

type Props = TouchableOpacityProps & HeaderInfoProps & {
  title: string;
  subtitle: string;
  type?: PercentCardStyleProps;
}

export function PercentageCard({percentage, title, subtitle, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon color={type}/>
      <Percentage>
        {percentage}
      </Percentage>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}