import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import GameContent from '../../Components/GameContent/GameContent';
import styled from 'styled-components';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute';
import { BasicButton } from '../../Components/BasicButton/BasicButton';

const { Title } = Typography;

const { Meta } = Card;

const CardWrapperFake = styled(Card)`
  width: 40vw;
  border-color: red;
  border-radius: 5px;
  border-bottom-width: thin;
  border-bottom-style: solid;
  margin: 0 50px;
`;
const CardWrapperReal = styled(Card)`
  margin-top: 250px;
  width: 40vw;
  border-color: green;
  border-radius: 5px;
  margin: 0 50px;
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
const Boxv2 = styled.div`
  display: flex;
`;

const Boxv3 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttonv2 = styled(Button)`
  width: 100px !important;
  height: 100px !important;
`;

export const Result = (props) => {
  const [imagearrayLength, setImageArrayLength] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    location: {
      state: { questions },
    },
  } = props;

  useEffect(() => {
    setImageArrayLength(questions.length);
  }, []);

  const history = useHistory();

  const onClick = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === 4) {
      history.push(AppRoute.Summary, { questions });
    }
  };

  const isDisabled = currentIndex === 5 ? true : false;

  console.log(currentIndex);
  return (
    <div>
      {/* <Title level={2}>Zobacz poprawne odpowiedzi</Title> */}
      <Box>
        <Buttonv2 type="primary" icon={<LeftOutlined />} size={'large'} onClick={() => onClick()} />
        <ImageBox>
          <CardWrapperFake hoverable cover={<img alt="example" src={questions[currentIndex].left.image_url} />}>
            <Title level={2}>Fake News</Title>
          </CardWrapperFake>
          <CardWrapperReal hoverable cover={<img alt="example" src={questions[currentIndex].right.image_url} />}>
            <Title level={2}>Real News</Title>
          </CardWrapperReal>
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
