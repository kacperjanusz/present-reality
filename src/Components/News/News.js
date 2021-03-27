import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Meta } = Card;

const CardWrapper = styled(Card)`
  width: '40%';
  transition: all, 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

const News = ({ title, image_url, source, handleClick }) => {
  const isReal = source === 'aszdziennik.pl';
  console.log('🚀 ~ file: News.js ~ line 17 ~ News ~ isReal', isReal);
  return (
    <CardWrapper
      hoverable
      style={{ width: '40%' }}
      cover={<img alt="example" src={image_url} onClick={handleClick(isReal)} />}
    >
      <Meta title={title} />
    </CardWrapper>
  );
};

export default News;
