import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
import GameContent from '../../Components/GameContent/GameContent';

import { useGameData } from '../../hooks/useGameData';
const Wrapper = styled.div`
  height: 100vh;
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
