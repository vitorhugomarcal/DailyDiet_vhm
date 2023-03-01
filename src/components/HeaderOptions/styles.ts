import { CaretLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  padding: 24px;
  position: absolute;
  z-index: 1;
  top: 0;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_600,
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  padding: 24px;
  top: 0;
  flex: 1
`