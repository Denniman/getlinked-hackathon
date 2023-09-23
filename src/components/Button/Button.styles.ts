import styled from "styled-components";

export const ButtonContainer = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 4px;
  padding: 1.2rem 3.5rem;
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
  background: linear-gradient(260deg, #903aff, #d434fe, #ff26b9, #fe34b9);
`;
