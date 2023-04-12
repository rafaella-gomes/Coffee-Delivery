import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    color: ${(props) =>
      props.color === "purple"
        ? props.theme["purple-500"]
        : props.theme["yellow-700"]};
  }
`;
