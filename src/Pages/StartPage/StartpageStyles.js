import styled from 'styled-components';
import { Button, Card } from 'antd';
import background from '../../assets/background.png';

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
  margin-left: 250px;
`;

export const Description = styled.h1`
  font-size: 18px;
  text-align: center;
  color: #c2a38e;
`;

export const DescriptionBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  margin-left: 250px;
`;

export const BoxImage = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  margin-left: 250px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background: url(${background}); */
`;

export const Details = styled.span`
  color: #d87f3f;
`;

export const CardContent = styled(Card)`
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow: inset 0 0 1em rgb(220, 220, 220), 0 0 1em rgb(105, 105, 105);
  background-color: rgb(211, 211, 211);
  opacity: rgba(255, 255, 255, 0.5);
`;

export const Author = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 480px;
  margin-bottom: 5px;
  width: 400px;
`;
