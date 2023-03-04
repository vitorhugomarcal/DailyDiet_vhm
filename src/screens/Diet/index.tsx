import { Container } from "./styles";

import { HeaderInfo } from "@components/HeaderInfo";
import { DietInfo } from "@components/DietInfo";
import { mealGetAll } from "@storage/meals/mealsGetAll";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

export function Diet() {
  const [totalMeals, setTotalMeals] = useState('') 
  const [totalDietMeals, setTotalDietMeals] = useState('') 
  const [totalNotDietMeals, setTotalNotDietMeals] = useState('') 

  async function fetchTotalMeals() {
    const storedMeals = await mealGetAll()
    const { data } = storedMeals.find(item => item)
    const count = JSON.stringify(data.length)
    setTotalMeals(count)
  }
  
  async function fetchDietMeals() {
    const storedMeals = await mealGetAll()
    const { data } = storedMeals.find(item => item)

    const filter = data.filter(data => data.status === 'SECONDARY')

    const total = filter.length

    setTotalDietMeals(total)
  }
  
  async function fetchNotDietMeals() {
    const storedMeals = await mealGetAll()
    const { data } = storedMeals.find(item => item)

    const filter = data.filter(data => data.status === 'PRIMARY')

    const total = filter.length

    setTotalNotDietMeals(total)
  }

  const percentage = (totalDietMeals*100/totalMeals)

  console.log(percentage)

  useFocusEffect(useCallback(() => {
    fetchTotalMeals(),
    fetchDietMeals(),
    fetchNotDietMeals()
  }, []))

  return (
    <Container>
      <HeaderInfo percentage={percentage} />
      <DietInfo
        totalMeals={totalMeals} 
        totalDietMeals={totalDietMeals}
        totalNotDietMeals={totalNotDietMeals}

      />
     
    </Container>
  )
}