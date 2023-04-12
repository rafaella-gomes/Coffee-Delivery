import styled from "styled-components";
import { TitleText, RegularText } from "../../Components/TypesofText";
export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem 0.375rem 0.375rem;
  padding: 1, 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme["yellow-300"]};
    color: ${(props) => props.theme["yellow-700"]};
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Name = styled(TitleText).attrs({
  size: "s",
  type: "subtitle",
  weight: "700",
})`
  margin-bottom: 0.5rem;
`;

export const Description = styled(RegularText).attrs({
  size: "s",
  type: "label",
})`
  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme["purple-700"]};
    color: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    &:hover {
      background: ${(props) => props.theme["purple-300"]};
    }
  }
`;

export const QuantityButtonContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 6px;

  padding: ${(props) => (props.size === "medium" ? "0.5rem" : "0.3rem")};

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme["purple-500"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme["purple-700"]};
  }
`;
