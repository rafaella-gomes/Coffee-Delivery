import styled from "styled-components";
import BackgroundImg from "../../assets/Background.png";
import { rgba } from "polished";
import { TitleText } from "../../Components/TypesofText";

export const HomeContainerIntro = styled.section`
  width: 100%;
  height: 34rem;
  background: ${(props) => `url(${BackgroundImg}) no-repeat center,
	linear-gradient(
		0deg,
		${props.theme["white"]} 0%,
		${rgba(props.theme["base-background"], 0.2)} 50%,
		${props.theme["base-background"]} 100%
	)`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  margin-bottom: 9.8rem;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
  font-weight: 800;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

export const CoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;
