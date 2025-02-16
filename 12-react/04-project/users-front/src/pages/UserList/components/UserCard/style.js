import styled from "styled-components";

export const ListItem = styled.li`
  width: 350px;
  padding: 16px;
  border-radius: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  color: #fff;
  background: #252d48;

  h2 {
    font-size: 20px;
    text-transform: capitalize;
  }

  strong {
    font-weight: 700;
  }

  p {
    margin-top: 8px;
    font-weight: 200;
  }
`;

export const Avatar = styled.img`
  width: 80px;
`;

export const TrashIcon = styled.img`
  padding-left: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
