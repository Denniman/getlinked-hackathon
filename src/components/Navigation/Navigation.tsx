import { Link, NavContainer, LinkWrapper } from "./Navigation.style";

export const Navigation = () => {
  return (
    <NavContainer>
      <LinkWrapper>
        <Link to="#">Timeline</Link>
        <Link to="#">Overview</Link>
        <Link to="#">FAQs</Link>
        <Link to="#">Contact</Link>
      </LinkWrapper>
    </NavContainer>
  );
};
