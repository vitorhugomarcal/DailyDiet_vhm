import { Highlight } from "@components/Highlight";
import { InfoCard } from "@components/InfoCard";
import { InfoMiniCard } from "@components/InfoMiniCard";
import { Container } from "./styles";

interface DietInfoProps {
  totalMeals: string;
  totalDietMeals: string;
  totalNotDietMeals: string;
}

export function DietInfo({totalMeals, totalDietMeals, totalNotDietMeals}: DietInfoProps) {

  return (
    <Container>
      <Highlight title="Estatísticas gerais" />

      <InfoCard title="22" subtitle="melhor sequência de pratos dentro da dieta"/>
      <InfoCard title={totalMeals} subtitle="refeições registradas"/>

      <InfoMiniCard
        titleP={totalDietMeals}
        subtitleP="refeições dentro da dieta"
        titleS={totalNotDietMeals}
        subtitleS="refeições fora da dieta"
      />
    </Container>
  )
}