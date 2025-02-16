import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
`;
