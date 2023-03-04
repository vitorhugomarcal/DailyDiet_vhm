import { Button } from "@components/Button";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { ButtonDiet } from "@components/ButtonDiet";
import { HeaderOptions } from "@components/HeaderOptions";
import { mealCreate } from "@storage/meals/mealCreate";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Form, FormButtonContent, ButtonContent, Title } from "./styles";

type MealProps = {
  title: string
  data: [
    {
      id: string,
      name: string,
      hour: string,
      description: string,
      status: string,
    }
  ];
}


export function New() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [isDietActive, setIsDietActive] = useState(false);
  const [isNotDietActive, setIsNotDietActive] = useState(false);
  const navigation = useNavigation()

  const today = new Date(Date.now());
  const title = today.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '.');
  const hour = today.toLocaleTimeString('pt-BR', { hour: '2-digit', minute:'2-digit' });

  const handleDietPress = () => {
    setIsDietActive(true);
    setIsNotDietActive(false);
  };

  const handleNotDietPress = () => {
    setIsDietActive(false);
    setIsNotDietActive(true);
  };

  async function handleNew() {
    const status = isDietActive === true ? 'SECONDARY' : 'PRIMARY'
    const meal: MealProps = {
      title,
      data: [
        {
          id: uuidv4().toString(),
          name,
          hour,
          description,
          status,
        }
      ]
    }

    await mealCreate(meal)
    navigation.navigate('confirm')
  }

  return (
    <Container>
      <HeaderOptions />
      <Form>
        <Input title='Nome' onChangeText={setName} />
        <Input title='Descrição' numberOfLines={4} onChangeText={setDescription} />
        <Title>
          Está dentro da dieta?
        </Title>
        <FormButtonContent>
          <ButtonDiet title="Sim" isActive={isDietActive} onPress={handleDietPress} />
          <ButtonDiet title='Não' type="SECONDARY" isActive={isNotDietActive} onPress={handleNotDietPress} />
        </FormButtonContent>
        <ButtonContent>
          <Button title="Cadastrar refeição" type="TERCIARY" onPress={handleNew} />
        </ButtonContent>
      </Form>
    </Container>
  )
}