import { Card } from "../../Components/Card/Card";
import { coffes } from "../../utils/coffe";
import {
  HomeContainerIntro,
  HomeContainer,
  IntroContent,
  IntroTitle,
  BenefitsContainer,
} from "./styles";
import introImg from "../../assets/Imagem.png";
import { RegularText } from "../../Components/TypesofText";

import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { InfoWithIcon } from "../../Components/infoWithIcon";
import { OurCoffees } from "./components/Coffees";

import { CoffeeList } from "./components/Coffees/styles";
export function Home() {
  console.log("home");
  return (
    <HomeContainer>
      <HomeContainerIntro>
        <IntroContent className="container">
          <div>
            <section>
              <IntroTitle size="xl">
                Encontre o café perfeito para qualquer hora do dia
              </IntroTitle>
              <RegularText size="l" type="subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora.
              </RegularText>
            </section>
            <BenefitsContainer>
              <InfoWithIcon
                icon={<ShoppingCart weight="fill" />}
                color={"carrinho"}
                text="Compra simples e segura"
              />
              <InfoWithIcon
                icon={<Package weight="fill" />}
                color={"embalagem"}
                text="Embalagem mantém o café intacto"
              />
              <InfoWithIcon
                icon={<Timer weight="fill" />}
                color={"timer"}
                text="Entrega rápida e rastreada"
              />

              <InfoWithIcon
                icon={<Coffee weight="fill" />}
                text="O café fresquinho até você"
              />
            </BenefitsContainer>
          </div>
          <img src={introImg} />
        </IntroContent>
      </HomeContainerIntro>
      <section>
        <OurCoffees />
        <CoffeeList className="container">
          {coffes.map((coffe) => (
            <Card key={coffe.id} coffe={coffe} />
          ))}
        </CoffeeList>
      </section>
    </HomeContainer>
  );
}
