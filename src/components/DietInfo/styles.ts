import styled from "styled-components/native";

 export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding: 33px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
 `