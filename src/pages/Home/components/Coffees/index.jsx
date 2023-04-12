import { TitleText } from "../../../../Components/TypesofText";
import { CoffeesContainer as OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer>
      <TitleText size="l" type="subtitle" className="container">
        Nossos cafés
      </TitleText>
    </OurCoffeesContainer>
  );
}
