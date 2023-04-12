import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme["base-background"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: small;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    background: ${(props) => props.theme["yellow-700"]};
  }

  background: ${(props) =>
    props.color === "purple"
      ? props.theme["purple-300"]
      : props.theme["yellow-300"]};
  color: ${(props) =>
    props.color === "purple"
      ? props.theme["purple-700"]
      : props.theme["yellow-700"]};
`;

export const HeaderIcon = styled.div`
  color: ${(props) =>
    props.icon === "purple"
      ? props.theme["purple-500"]
      : props.theme["yellow-700"]};
`;
