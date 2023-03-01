import { Highlight } from "@components/Highlight";
import { InfoCard } from "@components/InfoCard";
import { InfoMiniCard } from "@components/InfoMiniCard";
import { Container } from "./styles";

export function DietInfo() {
  return (
    <Container>
      <Highlight title="Estatísticas gerais" />

      <InfoCard title="22" subtitle="melhor sequência de pratos dentro da dieta"/>
      <InfoCard title="109" subtitle="refeições registradas"/>

      <InfoMiniCard
        titleP="99"
        subtitleP="refeições dentro da dieta"
        titleS="10"
        subtitleS="refeições fora da dieta"
      />
    </Container>
  )
}