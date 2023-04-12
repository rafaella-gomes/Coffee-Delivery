import styled from "styled-components";

export const TitleText = styled.h1`
  color: ${(props) =>
    props.type === "text"
      ? props.theme["base-text"]
      : props.type === "subtitle"
      ? props.theme["base-subtitle"]
      : props.theme["base-title"]};

  font-size: ${(props) =>
    props.size === "s"
      ? "1.2rem"
      : props.size === "xs"
      ? "1.125rem"
      : props.size === "l"
      ? "2rem"
      : props.size === "xl"
      ? "3rem"
      : "1.5rem"};
  font-family: "Baloo 2", cursive;
  line-height: 130%;
`;

export const RegularText = styled.p`
  color: ${(props) =>
    props.type === "label"
      ? props.theme["base-label"]
      : props.type === "subtitle"
      ? props.theme["base-subtitle"]
      : props.theme["base-title"]};

  font-size: ${(props) =>
    props.size === "s" ? "0.875rem" : props.size === "l" ? "1.25rem" : "1rem"};
  font-family: "Roboto", sans-serif;
  line-height: 130%;
`;
