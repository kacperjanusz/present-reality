import React, { useState } from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute';

const { Title } = Typography;

const CardWrapperFake = styled(Card)`
  width: 40vw;
  border-color: red;
  border-radius: 5px;

  border-width: 5px;

  margin: 0 50px;
`;
const CardWrapperReal = styled(Card)`
  margin-top: 250px;
  width: 40vw;
  border-color: green;
  border-radius: 5px;
  margin: 0 50px;
  border-width: 5px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 250px;

  overflow: hidden !important;
`;

const Buttonv2 = styled(Button)`
  width: 100px !important;
  height: 100px !important;
`;

export const Result = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    location: {
      state: { questions },
    },
  } = props;

  const history = useHistory();

  const onClick = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === 4) {
      history.push(AppRoute.Summary, { questions });
    }
  };

  const left =
    questions[currentIndex].left.source === 'aszdziennik.pl' ? (
      <CardWrapperFake cover={<img alt="example" src={questions[currentIndex].left.image_url} />}>
        <Title style={{ textAlign: 'center' }} type="danger" level={2}>
          Fake News
        </Title>
        <Title level={2}>{questions[currentIndex].left.title}</Title>
      </CardWrapperFake>
    ) : (
      <CardWrapperReal cover={<img alt="example" src={questions[currentIndex].left.image_url} />}>
        <Title style={{ textAlign: 'center' }} type="success" level={2}>
          Real News
        </Title>
        <Title level={2}>{questions[currentIndex].left.title}</Title>
      </CardWrapperReal>
    );

  const right =
    questions[currentIndex].right.source === 'aszdziennik.pl' ? (
      <CardWrapperFake cover={<img alt="example" src={questions[currentIndex].right.image_url} />}>
        <Title style={{ textAlign: 'center' }} type="danger" level={2}>
          Fake News
        </Title>
        <Title level={2}>{questions[currentIndex].right.title}</Title>
      </CardWrapperFake>
    ) : (
      <CardWrapperReal cover={<img alt="example" src={questions[currentIndex].right.image_url} />}>
        <Title style={{ textAlign: 'center' }} level={2}>
          Real News
        </Title>
        <Title level={2}>{questions[currentIndex].right.title}</Title>
      </CardWrapperReal>
    );

  const isDisabled = currentIndex === 5 ? true : false;

  console.log(currentIndex);
  return (
    <div>
      <Box>
        <Buttonv2 type="primary" icon={<LeftOutlined />} size={'large'} onClick={() => onClick()} />
        <ImageBox>
          {left}
          {right}
        </ImageBox>
        <Buttonv2
          type="primary"
          icon={<RightOutlined />}
          size={'large'}
          onClick={() => onClick()}
          disabled={isDisabled}
        />
      </Box>
    </div>
  );
};
