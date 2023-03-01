import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  border: 1px;
  border-color: red;
  justify-content: center;
`

export const Content = styled.View`
 align-items: center;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_700};
  `}
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
`

export const Image = styled.Image`
  margin: 40px
`