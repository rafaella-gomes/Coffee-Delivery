import { RegularText, TitleText } from "../../Components/TypesofText";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import imageorder from "../../assets/imageorder.svg";
import { InfoWithIcon } from "../../Components/infoWithIcon";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

export function SuccessPage() {
  const informations = JSON.parse(
    localStorage.getItem("coffeDelivery-checkout")
  );

  return (
    <OrderConfirmedContainer>
      <div className="container">
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" type="subtitle">
          {" "}
          Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            text={
              <RegularText>
                Entrega em Rua{" "}
                <strong>
                  {informations.Rua},{informations.Número},{informations.Bairro}
                  , {informations.Cidade},{informations.Estado}.
                </strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            color="timer"
            text={
              <RegularText>
                Previsão de entrega <strong>20-30min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            color="carrinho"
            text={
              <RegularText>
                Pagamento na entrega <strong>{informations.paymentForm}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={imageorder} />
      </section>
    </OrderConfirmedContainer>
  );
}
