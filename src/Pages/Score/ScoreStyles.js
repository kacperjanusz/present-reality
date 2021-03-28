import styled from 'styled-components';
import { Card } from 'antd';

export const CardContent = styled(Card)`
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow: inset 0 0 1em rgb(220, 220, 220), 0 0 1em rgb(105, 105, 105);
  background-color: rgb(211, 211, 211);
  opacity: rgba(255, 255, 255, 0.5);
  width: 30%;
  height: 60%;
  align-items: center;
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  * > ul {
    display: none;
  }
`;