import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("coffeDelivery-cart")) || []
  );
  // Desejo que meu estado comece com o valor do meu localStorage, pois assim, mesmo atualizando a página ou trocando de página, o valor está salvo. jSon.parse transforma de volta uma string em objeto ou array. || significa "ou", retorne a segunda premissa.
  function addItemToCart(selectedProduct, quantity) {
    const copyCart = [...cart];
    const indexOfProductInCart = copyCart.findIndex(
      (productInCart) => productInCart.id === selectedProduct.id
    );
    if (indexOfProductInCart >= 0) {
      copyCart[indexOfProductInCart].quantity += quantity;
      // Ele mesmo mais a quantidade.
    } else {
      copyCart.push({ ...selectedProduct, quantity });
    }
    setCart(copyCart);
  }

  useEffect(() => {
    localStorage.setItem("coffeDelivery-cart", JSON.stringify(cart));
  }, [cart]);
  // Toda vez que há uma mudança no cart eu armazeno isso no meu localstorage como string.

  function decreaseItemFromCart(selectedProduct) {
    const copyCart = [...cart];
    const indexOfProductInCart = copyCart.findIndex(
      (productInCart) => productInCart.id === selectedProduct.id
    );
    if (
      indexOfProductInCart >= 0 &&
      copyCart[indexOfProductInCart].quantity > 1
    ) {
      copyCart[indexOfProductInCart].quantity -= 1;
      setCart(copyCart);
    } else if (indexOfProductInCart >= 0) {
      const arrayWithoutRemovedOne = copyCart.filter(
        (productInCart) => productInCart.id !== selectedProduct.id
      );
      setCart(arrayWithoutRemovedOne);
    }
  }

  function removeItemFromCart(selectedProduct) {
    const copyCart = [...cart];
    const indexOfProductInCart = copyCart.findIndex(
      (productInCart) => productInCart.id === selectedProduct.id
    );

    if (indexOfProductInCart >= 0) {
      const arrayWithoutRemovedOne = copyCart.filter(
        (productInCart) => productInCart.id !== selectedProduct.id
      );
      setCart(arrayWithoutRemovedOne);
    }
  }
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, decreaseItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Eu crio esse context, pois essa informação eu utilizo em mais de um componente.
// Possibilidades existentes: O item já existe no carrinho, se sim eu tenho que aumentar a quantidade, se não eu vou adicionar o item e a quantidade.
