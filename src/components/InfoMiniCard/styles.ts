import styled, { css } from "styled-components/native";

type TMiniCardProps = 'PRIMARY' | 'SECONDARY';

interface Props {
  type: TMiniCardProps
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const Content = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_LIGHT };
  border-radius: 8px;
  padding: 16px;
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