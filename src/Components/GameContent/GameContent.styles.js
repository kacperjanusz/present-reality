import styled from 'styled-components';
import { UrgeWithPleasureComponent } from '../Timer/Timer';

export const Root = styled.div`
  height: 95vh;
`;

export const NewsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #364d79;
  height: 80vh;
`;

export const Timer = styled(UrgeWithPleasureComponent)`
  height: 15vh;
`;
