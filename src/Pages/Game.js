import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
import GameContent from '../Components/GameContent/GameContent';

import { useGameData } from '../hooks/useData';

const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Game = () => {
  const { data, isLoading } = useGameData();

  if (isLoading)
    return (
      <Spin size="large">
        <Wrapper>
          <h1>Game</h1>
        </Wrapper>
      </Spin>
    );

  return (
    <Wrapper>
      <h1>Game</h1>
      {<GameContent data={data} />}
    </Wrapper>
  );
};
