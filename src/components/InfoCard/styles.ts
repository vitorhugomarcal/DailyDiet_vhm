import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;

  padding: 16px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
`