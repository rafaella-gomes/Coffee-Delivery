import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .CEP {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .Rua {
    grid-column: span 3;
  }

  .Complemento {
    grid-column: span 2;
  }

  input {
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    transition: 0.4s;

    &:focus {
      border-color: ${(props) => props.theme["yellow-700"]};
    }

    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  label,
  input {
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${(props) => props.theme["base-button"]};
    transition: 0.4s;

    input {
      visibility: hidden;
      appearance: none;
    }

    svg {
      color: ${(props) => props.theme["purple-500"]};
    }

    &:hover {
      background: ${(props) => props.theme["base-hover"]};

      user-select: none;
      background: ${(props) => props.theme["purple-300"]};
      border-color: ${(props) => props.theme["purple-500"]};

      &:hover {
        background: ${(props) => props.theme["purple-300"]};
      }
    }
  }
`;

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 48rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${(props) => props.theme["white"]};
  font-weight: 700;
  background: ${(props) => props.theme["yellow-500"]};
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["yellow-700"]};
  }
`;
