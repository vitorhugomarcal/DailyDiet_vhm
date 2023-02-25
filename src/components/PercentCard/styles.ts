import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentCardStyleProps = 'PRIMARY' | 'SECONDARY';

interface Props {
  type: PercentCardStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  padding: 20px 16px;
  margin-bottom: 40px;

  position: relative;
`

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, color }) => ({
  size: 24,
  color: color === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
}))`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 8px;
`