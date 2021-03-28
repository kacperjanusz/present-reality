import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Meta } = Card;

const CardWrapper = styled(Card)`
  width: 40vw;
  transition: all, 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

const News = ({ title, image_url, source, handleClick }) => {
  const isReal = source === 'aszdziennik.pl';
  return (
    <CardWrapper hoverable cover={<img alt="example" src={image_url} onClick={handleClick(isReal)} />}>
      <Meta title={title} />
    </CardWrapper>
  );
};

export default News;
