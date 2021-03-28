import React from 'react';
import { useHistory } from 'react-router-dom';
import { bravo, playAgain, seeYourAnswers, tasks, youAnswearedCorractly } from '../../constants';
import { AppRoute } from '../../routing/AppRoute';
import awesome from '../../assets/awesome.png';
import bad from '../../assets/bad.png';
import good from '../../assets/awesome.png';
import {
  BoxImage,
  CardContent,
  CardContentv2,
  CustomButton,
  CustomCol,
  CustomDescription,
  CustomTitle,
  DescriptionBox,
} from './SummaryStyles';
import { Row, Col, Image } from 'antd';

function getEmoticon(answears) {
  if (answears <= 3) {
    return bad;
  } else if (answears == 4) {
    return good;
  } else return awesome;
}

export const Summary = (props) => {
  const {
    location: {
      state: { questions },
    },
  } = props;

  const correctAnwsers = 5 - questions.reduce((agg, curr) => (agg += curr.isCorrect ? 1 : 0), 0);

  console.log('fake', questions);
  console.log('correctAnwsers', correctAnwsers);

  let history = useHistory();
  return (
    <CardContentv2>
      <CardContent>
        <Row justify="start">
          <CustomCol span="10">
            <CustomTitle>{bravo}</CustomTitle>
            <DescriptionBox>
              <CustomDescription>{youAnswearedCorractly + correctAnwsers + tasks}</CustomDescription>
            </DescriptionBox>
            <CustomButton type="primary" onClick={() => history.push('/result', { questions })}>
              {seeYourAnswers}
            </CustomButton>
            <CustomButton type="primary" onClick={() => history.push('/information')}>
              {playAgain}
            </CustomButton>
          </CustomCol>
          <Col span="12">
            {
              <BoxImage>
                <Image width={300} src={getEmoticon(correctAnwsers)} />
              </BoxImage>
            }
          </Col>
        </Row>
      </CardContent>
    </CardContentv2>
  );
};
