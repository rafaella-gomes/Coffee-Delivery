import { RegularText } from "../../../../Components/TypesofText";
import { SectionTitleContainer } from "./styles";

export function SectionTitle({ title, subtitle, icon }) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText type="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  );
}
