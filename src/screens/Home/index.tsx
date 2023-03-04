import { Alert, FlatList, SectionList, Text } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentCard";
import { Meal } from "@components/Meal";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meals/mealsGetAll";

interface MealsProps {
  title: string;
  data: [{
    id: string,
    name: string,
    hour: string,
    description: string,
    status: string,
  }]
} 

export function Home() {
  const { COLORS, FONT_FAMILY } = useTheme()
  const navigation = useNavigation()
  const [meals, setMeals] = useState<MealsProps[]>([])

  function handleDietInfo() {
    navigation.navigate('diet')
  }
  function handleNew() {
    navigation.navigate('new')
  }

  async function fetchMeals() {
    try {
      const data = await mealGetAll()
      console.log(JSON.stringify(data))
      setMeals(data)

    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  return (
    <Container>
      <Header />
      <PercentageCard title="90,21%" subtitle="das refeições dentro da dieta" onPress={handleDietInfo}/>
      <Text style={{ marginBottom: 8, fontFamily: FONT_FAMILY.REGULAR, color: COLORS.GRAY_700, fontSize: 16 }}>
        Refeições
      </Text>
      <Button title="Nova refeição" onPress={handleNew} />
      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({item }) => (
          <Meal
            title={item.name}
            hour={item.hour}
            type={item.status}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{ marginTop: 12, marginBottom: 8, fontFamily: FONT_FAMILY.BOLD, color: COLORS.GRAY_700, fontSize: 16 }}>{title}</Text>
        )}
      />
    </Container>
  )
}