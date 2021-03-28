import styled from 'styled-components';
import { Button, Input } from 'antd';

export const CardWrapper = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbf7f7;
  padding: 5;
  border-radius: 30px;
  background-color: rgb(251, 247, 247, 0.44);
  * > input {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  text-align: center;
  color: #d87f3f;
`;

export const CustomInput = styled(Input)`
  padding: 10px !important;
  width: 400px !important;
`;

export const CustomButton = styled(Button)`
  width: '50%';
  margin-top: 15px;
  width: 400px;
  height: 40px;
`;
