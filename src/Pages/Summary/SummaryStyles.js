import styled from 'styled-components';
import { Button, Col } from 'antd';
import { Card } from 'antd';

export const CustomTitle = styled.h6`
  margin-top: 10px;
  font-size: 35px;
  text-align: left;
  color: #d87f3f;
  padding-bottom: 1rem;
  border-bottom: 5px solid;
  margin-top: 2rem;
`;

export const CustomCol = styled(Col)`
  padding-left: 4rem;
`;

export const CardContent = styled(Card)`
  display: flex;
  width: 50%;
  margin-top: 120px;
  height: 50vh
  justify-content: center;
  align-content: center;
  box-shadow: inset 0 0 1em rgb(220, 220, 220), 0 0 1em rgb(105, 105, 105);
  background-color: rgb(211, 211, 211);
  opacity: rgba(255, 255, 255, 0.5);
`;

export const CardContentv2 = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CustomDescription = styled.h6`
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  color: #7a273a;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  color: #ffe6cc;
`;

export const BoxImage = styled.div`
  padding-top: 85px;
  margin-left: 200px;
`;

export const DescriptionBox = styled.div`
  width: 600px;
  display: flex;
  margin-top: 5px;
  margin-bottom: 15px;
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
