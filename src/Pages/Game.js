import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
import GameContent from '../Components/GameContent/GameContent';

import { useGameData } from '../hooks/useGameData';
import { CustomTitle } from './Summary/SummaryStyles';

const Wrapper = styled.div`
  height: 100vh;
`;

const H1 = styled(CustomTitle)`
  height: 5vh;
  margin: 0;
  text-align: center;
`;

export const Game = () => {
  const { data, isLoading } = useGameData();

  if (isLoading)
    return (
      <Spin size="large">
        <Wrapper></Wrapper>
      </Spin>
    );

  return (
    <Wrapper>
      <GameContent data={data} />
    </Wrapper>
  );
};
