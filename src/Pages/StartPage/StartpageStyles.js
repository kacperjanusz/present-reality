import styled from 'styled-components';
import { Button } from 'antd';

export const Title = styled.h6`
  margin-top: 45px;
  font-size: 35px;
  text-align: center;
  color: #d87f3f;
`;

export const CustomButton = styled(Button)`
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  width: 400px;
  height: 50px;
  margin-top: 8px;
`;

export const Description = styled.h1`
  font-size: 18px;
  text-align: center;
  color: #c2a38e;
`;

export const DescriptionBox = styled.div`
  width: 400px;
  display: flex;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #10305f;
  padding: 5;
`;

export const Details = styled.span`
  color: #d87f3f;
`;

export const Author = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 480px;
  margin-bottom: 5px;
  width: 400px;
`;
