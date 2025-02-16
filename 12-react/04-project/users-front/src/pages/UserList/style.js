import styled from "styled-components";

export const UserCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
