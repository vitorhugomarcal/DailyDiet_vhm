import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERCIARY';

interface Props {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;      
  border-radius: 6px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' || 'TERCIARY' ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_100 };

  ${({ theme, type }) => type && `
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_700};
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' || 'TERCIARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `}
`

export const Icon = styled(Plus).attrs<Props>(({ theme, color }) => ({
  size: 18,
  color: color === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))<Props>`
  margin-right: 12px;
  display: ${({ type }) => type === 'TERCIARY' ? 'none' : 'flex'};
`