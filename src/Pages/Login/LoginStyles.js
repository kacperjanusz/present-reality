import styled from 'styled-components';
import img from '../../assets/background.png';

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5;
  background-image: url(${img});
`;
