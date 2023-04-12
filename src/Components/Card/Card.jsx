import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CoffeeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
  QuantityButtonContainer,
  IconWrapper,
} from "./styles";

import { RegularText, TitleText } from "../TypesofText";

export function Card({ coffe }) {
  const [count, setCount] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  function handleDecreasePurchase() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      count;
    }
  }

  function handleIncreasePurchase() {
    setCount(count + 1);
  }

  function handleAddCoffeAtCart() {
    addItemToCart(coffe, count);
  }

  return (
    <CoffeeCardContainer>
      <img src={coffe.img} alt="" />
      <Tags>
        {coffe.type.map((item) => (
          <span>{item}</span>
        ))}
      </Tags>
      <Name>{coffe.flavor}</Name>
      <Description>{coffe.text}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" type="text" as="strong">
            {coffe.price}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityButtonContainer size="medium">
            <IconWrapper>
              <Minus size={14} weight="fill" onClick={handleDecreasePurchase} />
            </IconWrapper>
            <input type="number " value={count} />
            <IconWrapper>
              <Plus onClick={handleIncreasePurchase} />
            </IconWrapper>
          </QuantityButtonContainer>
          <button>
            <ShoppingCart
              weight="fill"
              size={22}
              onClick={handleAddCoffeAtCart}
            />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
