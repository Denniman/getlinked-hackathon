import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  padding: 10px 15px;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  margin-right: auto;
  display: flex;
`;

export const Link = styled(_Link)`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
`;
