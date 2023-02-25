import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStatusStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: ButtonStatusStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  padding: 14px 16px 14px 12px;
  margin-bottom: 8px;
  
`

export const HourTitle = styled.Text`
  ${({ theme}) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-right: 12px;
`

export const Title = styled.Text`
  ${({ theme}) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-left: 12px;
  flex: 1;
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 999px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.RED_MID : theme.COLORS.GREEN_500};
`