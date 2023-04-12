import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
} from "phosphor-react";
import {
  AddressFormContainer,
  ButtonContainer,
  CompleteOrderContainer,
  CompleteOrderFormContainer,
  ConfirmationSectionContainer,
  DetailsContainer,
  FormSectionContainer,
  PaymentOptionsContainer,
  SelectedCoffeesContainer,
} from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { CheckoutCard } from "../../Components/CheckoutCard/CheckoutCard";
import { RegularText, TitleText } from "../../Components/TypesofText";

import { SectionTitle } from "../Checkout /Components/Section Title";

export function Checkout() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const totalCartPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );

  const totalCartPriceCorrected = totalCartPrice.toFixed(2);
  const totalPurchasePrice = (totalCartPrice + 3.5).toFixed(2);

  const handleFormSubmit = (data) => {
    console.log(data);

    localStorage.setItem("coffeDelivery-checkout", JSON.stringify(data));
    navigate("/successpage");
  };

  return (
    <CompleteOrderContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <CompleteOrderFormContainer>
        <TitleText size="xs" type="subtitle">
          Complete seu pedido
        </TitleText>
        <FormSectionContainer>
          <SectionTitle
            title="Endereço de Entrega"
            subtitle=" Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} />}
          />
          <AddressFormContainer>
            <input
              type="text"
              placeholder="CEP"
              className="CEP"
              {...register("CEP", { required: true })}
            />
            <input
              type="text"
              placeholder="Rua"
              className="Rua"
              {...register("Rua", { required: true })}
            />
            <input
              type="text"
              placeholder="Número"
              className="Número"
              {...register("Número", { required: true })}
            />
            <input
              type="text"
              placeholder="Complemento"
              className="Complemento"
              {...register("Complemento")}
            />

            <input
              type="text"
              placeholder="Bairro"
              className="Bairro"
              {...register("Bairro", { required: true })}
            />
            <input
              type="text"
              placeholder="Cidade"
              className="Cidade"
              {...register("Cidade", { required: true })}
            />
            <input
              type="text"
              placeholder="UF"
              className="Estado"
              {...register("Estado", { required: true })}
            />
          </AddressFormContainer>
        </FormSectionContainer>
        <FormSectionContainer>
          <SectionTitle
            title=" Pagamento"
            subtitle=" O pagamento é feito na entrega.Escolha a forma que deseja
            pagar."
            icon={<CurrencyDollar size={22} />}
          />
          <PaymentOptionsContainer>
            <label htmlFor="credit">
              <input
                type="radio"
                id="credit"
                value="Cartão de Crédito"
                {...register("paymentForm", { required: true })}
              />
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </label>

            <label htmlFor="debit">
              <input
                type="radio"
                id="debit"
                value=" Cartão de Débito"
                {...register("paymentForm", { required: true })}
              />
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </label>
            <label htmlFor="money">
              <input
                type="radio"
                id="money"
                value="Dinheiro"
                {...register("paymentForm", { required: true })}
              />
              <Money size={16} />
              DINHEIRO
            </label>
          </PaymentOptionsContainer>
        </FormSectionContainer>
      </CompleteOrderFormContainer>
      <SelectedCoffeesContainer>
        <TitleText size="xs" type="subtitle">
          Cafés Selecionados
        </TitleText>
        <DetailsContainer>
          {cart.map((coffe) => (
            <CheckoutCard key={coffe.id} coffe={coffe} />
          ))}
          <ConfirmationSectionContainer>
            <div>
              <RegularText size="s">Total de itens</RegularText>
              <RegularText>R${totalCartPriceCorrected}</RegularText>
            </div>
            <div>
              <RegularText size="s">Entrega</RegularText>
              <RegularText>R$3.50</RegularText>
            </div>
            <div>
              <RegularText weight="700" size="l" type="subtitle">
                {" "}
                Total
              </RegularText>
              <RegularText weight="700" size="l" type="subtitle">
                R${totalPurchasePrice}
              </RegularText>
            </div>
            <ButtonContainer type="submit" disabled={cart.length <= 0}>
              Confirmar Pedido
            </ButtonContainer>
          </ConfirmationSectionContainer>
        </DetailsContainer>
      </SelectedCoffeesContainer>
    </CompleteOrderContainer>
  );
}
