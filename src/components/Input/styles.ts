import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`

export const Label = styled.Text`  
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 4px
`

export const InputBox = styled(TextInput)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};

    background-color: ${theme.COLORS.GRAY_100};
    color: ${theme.COLORS.GRAY_700}; 

    border-width: 1px;
  `}


  min-height: 56px;
  padding: 14px;

  margin-bottom: 24px;

  border-radius: 6px;
`