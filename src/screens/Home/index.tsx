import { FlatList, Text } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentCard";
import { Meal } from "@components/Meal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface MealsProps {
  title: string;
  hour: string;
  type?: 'PRIMARY' | 'SECONDARY';
} 

const MealsAdd: MealsProps[] = [
  {
    title: 'Pizza',
    hour: '20:00',
  },
  {
    title: 'Água',
    hour: '14:00',
    type: 'SECONDARY',
  }
]

export function Home() {
  const { COLORS, FONT_FAMILY } = useTheme()
  const navigation = useNavigation()
  const [meals, setMeals] = useState<MealsProps[]>(MealsAdd)

  const today = new Date(Date.now());
  const formattedDate = today.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '.');

  function handleDietInfo() {
    navigation.navigate('diet')
  }
  function handleNew() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <PercentageCard title="90,21%" subtitle="das refeições dentro da dieta" onPress={handleDietInfo}/>
      <Text style={{ marginBottom: 8, fontFamily: FONT_FAMILY.REGULAR, color: COLORS.GRAY_700, fontSize: 16 }}>
        Refeições
      </Text>
      <Button title="Nova refeição" onPress={handleNew} />
      <Text style={{ marginTop: 32, marginBottom: 8, fontFamily: FONT_FAMILY.BOLD, color: COLORS.GRAY_700, fontSize: 18 }}>
        {formattedDate}
      </Text>
      <FlatList
        data={meals}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Meal 
            title={item.title}
            hour={item.hour}
            type={item.type}
          />
        )}
      />
    </Container>
  )
}