import { Container, Content, Subtitle, Title } from "./styles";

interface Props {
  titleP?: string;
  titleS?: string;
  subtitleP?: string;
  subtitleS?: string;
}

export function InfoMiniCard({titleP, subtitleP, titleS, subtitleS }: Props) {
  return (
    <Container>
      <Content type="PRIMARY">
        <Title>{titleP}</Title>
        <Subtitle>{subtitleP}</Subtitle>
      </Content>
      <Content type="SECONDARY">
        <Title>{titleS}</Title>
        <Subtitle>{subtitleS}</Subtitle>
      </Content>
    </Container>
  )
}