import { Container } from "./styles";

import { HeaderInfo } from "@components/HeaderInfo";
import { DietInfo } from "@components/DietInfo";

export function Diet() {
 
  return (
    <Container>
      <HeaderInfo />
      <DietInfo />
     
    </Container>
  )
}