import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
import GameContent from '../Components/GameContent/GameContent';

import { useGameData } from '../hooks/useGameData';

const Wrapper = styled.div`
  height: 100vh;
`;

const H1 = styled.h1`
  height: 5vh;
  margin: 0;
`;

export const Game = () => {
  const { data, isLoading } = useGameData();

  if (isLoading)
    return (
      <Spin size="large">
        <Wrapper>
          <H1>Game</H1>
        </Wrapper>
      </Spin>
    );

  return (
    <Wrapper>
      <H1>Game</H1>
      <GameContent data={data} />
    </Wrapper>
  );
};
