import { MapPin, ShoppingCart } from "phosphor-react/";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderButtonsContainer,
  HeaderButton,
  HeaderIcon,
} from "./styles";
import logoIgnite from "../../assets/logo-ignite.svg";
export function Header() {
  const { cart } = useContext(CartContext);
  const totalCartQuantity = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoIgnite} />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton color="purple">
            <HeaderIcon icon="purple">
              <MapPin size={20} weight="fill" />
            </HeaderIcon>
            Porto Alegre,RS
          </HeaderButton>

          <NavLink to="/checkout">
            <HeaderButton>
              <ShoppingCart size={20} weight="fill" />
              <span>{totalCartQuantity}</span>
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
