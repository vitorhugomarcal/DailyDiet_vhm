import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface Props {
  type: ButtonTypeStyleProps
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  padding: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;      
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200 };

  ${({ theme, type, isActive }) => type && isActive && `
    border-width: 1px;
    border-color: ${ type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };
    background-color: ${ type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_LIGHT };
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_700 };
  `}
`

export const Icon = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };
  margin-right: 8px;

`
