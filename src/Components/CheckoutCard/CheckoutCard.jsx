import { Trash, Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { RegularText } from "../TypesofText";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { QuantityButtonContainer } from "../Card/styles";
import { IconWrapper } from "../Card/styles";
export function CheckoutCard({ coffe, size }) {
  const { addItemToCart, removeItemFromCart, decreaseItemFromCart } =
    useContext(CartContext);

  function handleAddMoreCoffeAtCart() {
    addItemToCart(coffe, 1);
  }

  function handleDecreaseMinusCoffeAtCart() {
    decreaseItemFromCart(coffe);
  }

  function handleRemoveCoffeFromCart() {
    removeItemFromCart(coffe);
  }
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffe.img} />
        <div>
          <RegularText>{coffe.flavor}</RegularText>
          <ActionsContainer>
            <QuantityButtonContainer size="small">
              <IconWrapper>
                <Minus onClick={handleDecreaseMinusCoffeAtCart} />
              </IconWrapper>
              <input type="number " value={coffe.quantity} />
              <IconWrapper>
                <Plus onClick={handleAddMoreCoffeAtCart} />
              </IconWrapper>
            </QuantityButtonContainer>
            <RemoveButton onClick={handleRemoveCoffeFromCart}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>{coffe.price}</p>
    </CoffeeCartCardContainer>
  );
}
