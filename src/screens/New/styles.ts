import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
` 

export const Form = styled.View`
  width: 100%;
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const FormInputContent = styled.View`
  flex-direction: row;
  gap: 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 4px
`

export const FormButtonContent = styled.View`
  flex-direction: row;
  gap: 8px;

`

export const ButtonContent = styled.View`
  flex: 1;
  justify-content: flex-end;
`