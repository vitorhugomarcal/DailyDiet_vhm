import { CaretLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 36px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_300};
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  padding: 24px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL};
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
  margin-bottom: 66px
`