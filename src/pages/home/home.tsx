import { Icon } from "../../assets/Icons";
import { Button } from "../../components";
import galaxy from "../../assets/Images/galaxy.svg";
import BigIdea from "../../assets/Images/big-idea.png";
import CreativeMan from "../../assets/Images/man-wearing-smart-glasses.png";

import {
  Link,
  Container,
  LinkWrapper,
  HeroSection,
  GridContainer,
  NavContainer,
  RevolutionText,
  TimerContainer,
} from "./home.styles";

export const Home = () => {
  return (
    <Container>
      <NavContainer>
        <Icon name="logo" />
        <LinkWrapper>
          <Link to="#">Timeline</Link>
          <Link to="#">Overview</Link>
          <Link to="#">FAQs</Link>
          <Link to="#">Contact</Link>
          <Button>Register</Button>
        </LinkWrapper>
      </NavContainer>

      <HeroSection>
        <RevolutionText>
          Igniting a Revolution in HR
          <span className="innovation"> Innovation</span>
        </RevolutionText>
        <div className="getlinked--container">
          <div className="getlinked">
            <h1 className="getlinked__title">
              getlinked Tech Hackathon <span className="version">1.0</span>
            </h1>
            <p className="getlinked__subtext">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div>
              <Button>Register</Button>
            </div>
            <TimerContainer>
              <p className="timer-title">
                00<sub className="timer-minutes">H</sub>
              </p>
              <p className="timer-title">
                00<sub className="timer-minutes">M</sub>
              </p>
              <p className="timer-title">
                00<sub className="timer-minutes">S</sub>
              </p>
            </TimerContainer>
          </div>
          <div className="creative">
            <img src={CreativeMan} alt="creative" className="creative-img" />
            <img src={galaxy} alt="galaxy" className="galaxy-img" />
          </div>
        </div>
      </HeroSection>
      <GridContainer>
        <img src={BigIdea} alt="big idea" />
      </GridContainer>
    </Container>
  );
};
