import styled from 'styled-components';
import { UrgeWithPleasureComponent } from '../Timer/Timer';

export const Root = styled.div`
  height: 95vh;
`;

export const NewsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
`;

export const Timer = styled(UrgeWithPleasureComponent)`
  height: 5vh;
`;
