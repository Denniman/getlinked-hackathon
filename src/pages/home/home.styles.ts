import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

export const Container = styled.main`
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
`;

export const Link = styled(_Link)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
`;

export const NavContainer = styled.nav`
  display: flex;
  padding: 3rem 10rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.WHITE_COLOR};
`;

export const LinkWrapper = styled.div`
  gap: 7rem;
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid ${({ theme }) => theme.colors.WHITE_COLOR};
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
  font-family: ${({ theme }) => theme.fonts.ClashDisplayRegular};

  .rider--text {
  }
`;
export const HeroSection = styled.header`
  padding: 0 10rem;
  position: relative;
  &::before {
    top: 0;
    z-index: 3;
    content: "";
    left: 30rem;
    width: 25rem;
    height: 30rem;
    border-radius: 50%;
    filter: blur(15rem);
    position: absolute;
    background-color: #903aff;
  }

  .getlinked {
    &--container {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
    }

    &__title {
      font-size: 8rem;
      font-family: ${({ theme }) => theme.fonts.ClashDisplayBold};
    }

    &__subtext {
      max-width: 40ch;
      font-size: 2rem;
      line-height: 1.3;
      margin-top: 2rem;
      font-family: ${({ theme }) => theme.fonts.Montserrat};
    }
  }

  .version {
    color: #d434fe;
  }

  .creative-img {
    width: 100%;
  }

  .creative {
    position: relative;

    &::before {
      z-index: 3;
      top: 10rem;
      content: "";
      width: 30rem;
      height: 30rem;
      right: 11rem;
      border-radius: 50%;
      filter: blur(10rem);
      position: absolute;
      background-color: #903aff;
    }
  }

  .galaxy-img {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
`;

export const RevolutionText = styled.p`
  margin-top: 2rem;
  font-size: 3.6rem;
  font-weight: bold;
  font-style: italic;
  text-align: right;

  .innovation {
    position: relative;
  }

  .innovation::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    left: 0;
    bottom: -3px;
    background: linear-gradient(to right, #903aff, #d434fe, #ff26b9, #fe34b9);
  }
`;
export const TimerContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.UnicaOne};

  .timer-title {
    font-size: 6.4rem;
  }

  .timer-minutes {
    font-size: 14px;
  }
`;
