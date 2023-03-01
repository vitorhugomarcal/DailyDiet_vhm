import { Button } from "@components/Button";
import { ButtonDiet } from "@components/ButtonDiet";
import { HeaderOptions } from "@components/HeaderOptions";
import { Input } from "@components/Input";
import { MiniInput } from "@components/MiniInput";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Form, FormButtonContent, FormInputContent, ButtonContent, Title } from "./styles";

export function New() {
  const navigation = useNavigation()
  const [isDietActive, setIsDietActive] = useState(false);
  const [isNotDietActive, setIsNotDietActive] = useState(false);

  const handleDietPress = () => {
    setIsDietActive(true);
    setIsNotDietActive(false);
  };

  const handleNotDietPress = () => {
    setIsDietActive(false);
    setIsNotDietActive(true);
  };

  function handleConfirmation() {
    navigation.navigate('confirm')
  }

  return (
    <Container>
      <HeaderOptions />
      <Form>
        <Input title='Nome' />
        <Input title='Descrição' numberOfLines={4} />
        <FormInputContent>
          <MiniInput  title="Data" />
          <MiniInput title='Hora' />
        </FormInputContent>
        <Title>
          Está dentro da dieta?
        </Title>
        <FormButtonContent>
          <ButtonDiet title="Sim" isActive={isDietActive} onPress={handleDietPress} />
          <ButtonDiet title='Não' type="SECONDARY" isActive={isNotDietActive} onPress={handleNotDietPress} />
        </FormButtonContent>
        <ButtonContent>
          <Button title="Cadastrar refeição" type="TERCIARY" onPress={handleConfirmation} />
        </ButtonContent>
      </Form>
    </Container>
  )
}