import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  top: 200px;
  left: 450px;

  height: auto;
  justify-content: center;
  align-items: center;
`;
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  padding: 20px;

  background: #ffffff;

  border-radius: 8px;
  & h2 {
    font-weight: 600;
    font-size: 17px;
    line-height: 120%;
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7f8e9d;
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  background: #f4f4f3;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;

  letter-spacing: 0.16px;

  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #4cc6f5;
  }

  &::placeholder {
    color: #a8a8a8;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 0px;
  margin-top: 10px;
  max-width: 400px;

  background: #4cc6f5;
  border-radius: 6px;
  border: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;

  color: #ffffff;

  &:hover,
  &:focus {
    background: #2b97c2;
  }
`;
