import { Container, Title } from "./styles";

interface Props {
  title?: string;
}

export function Highlight({title }: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}