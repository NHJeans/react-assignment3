import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  display: block;
  padding-left: 30px;
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 30px;
  border: none;
  background-color: #efefef;
  border-radius: 50px;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a0d2cf;
  }
`;
export const Button = styled.button`
  background-color: #a0d2cf;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2cap;
  &:hover {
    background-color: #8cb9b5;
  }
`;
export const ToggleButton = styled.button`
  background-color: #97aba9;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  width: 100%;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2cap;
  &:hover {
    background-color: #798281;
  }
`;
