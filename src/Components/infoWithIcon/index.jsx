import { IconContainer, InfoWithIconContainer } from "./styles";

export function InfoWithIcon({ icon, text, color }) {
  return (
    <InfoWithIconContainer>
      <IconContainer color={color}>{icon}</IconContainer>
      <p>{text}</p>
    </InfoWithIconContainer>
  );
}
