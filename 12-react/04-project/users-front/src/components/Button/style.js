import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  padding: 16px 32px;

  border-radius: 30px;

  border: ${({ $primary }) => ($primary ? "none" : "2px solid #fff")};

  color: #fff;
  background: ${({ $primary }) =>
    $primary
      ? "linear-gradient(180deg, #fe7e5d 0, #ff6378 100%)"
      : "transparent"};

  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: ${({ $primary }) => ($primary ? 0.8 : "inherit")};
    color: ${({ $primary }) => ($primary ? "" : "#181f36")};
    background: ${({ $primary }) => ($primary ? "" : "#fff")};
  }

  &:active {
    scale: 0.98;
  }
`;
