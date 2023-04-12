import styled from "styled-components";
export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) =>
    props.color === "carrinho"
      ? props.theme["yellow-700"]
      : props.color === "embalagem"
      ? props.theme["base-text"]
      : props.color === "timer"
      ? props.theme["yellow-500"]
      : props.theme["purple-500"]};

  color: ${(props) => props.theme["white"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
