import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, InputBox, Label } from "./styles";

interface Props extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
  title: string
}

export function MiniInput({title, inputRef, ...rest}: Props) {
  const { COLORS } = useTheme()
  
  return(
    <Container >
      <Label>{title}</Label>
      <InputBox
         {...rest}
         ref={inputRef}
         placeholderTextColor={COLORS.GRAY_300}
      />
    </Container>
  ) 
}